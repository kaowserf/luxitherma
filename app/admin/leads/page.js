'use client';

import React, { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase';
import { collection, getDocs, query, orderBy, where, limit } from 'firebase/firestore';
import Link from 'next/link';

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, popup, pre-landing
  const [selectedLead, setSelectedLead] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    popup: 0,
    preLanding: 0,
    today: 0
  });
  
  useEffect(() => {
    fetchLeads();
  }, [filter]);
  
  async function fetchLeads() {
    try {
      setLoading(true);
      
      // Create a query based on filter
      let leadsQuery;
      if (filter === 'popup') {
        leadsQuery = query(
          collection(db, 'leads'),
          where('source', '==', 'popup'),
          orderBy('submittedAt', 'desc')
        );
      } else if (filter === 'pre-landing') {
        leadsQuery = query(
          collection(db, 'leads'),
          where('source', '==', 'pre-landing'),
          orderBy('submittedAt', 'desc')
        );
      } else {
        leadsQuery = query(
          collection(db, 'leads'),
          orderBy('submittedAt', 'desc')
        );
      }
      
      // Get the documents
      const querySnapshot = await getDocs(leadsQuery);
      const leadsData = [];
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let todayCount = 0;
      let popupCount = 0;
      let preLandingCount = 0;
      
      // Process each document
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // Format the timestamp if it exists
        const timestamp = data.submittedAt ? new Date(data.submittedAt.seconds * 1000) : 
                        data.capturedAt ? new Date(data.capturedAt) : new Date();
        
        // Count by category
        if (data.source === 'popup') popupCount++;
        if (data.source === 'pre-landing') preLandingCount++;
        
        // Count today's leads
        if (timestamp >= today) todayCount++;
        
        leadsData.push({
          id: doc.id,
          ...data,
          formattedDate: timestamp.toLocaleString()
        });
      });
      
      setStats({
        total: leadsData.length,
        popup: popupCount,
        preLanding: preLandingCount,
        today: todayCount
      });
      
      setLeads(leadsData);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError('Failed to load leads. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  const handleViewDetails = (lead) => {
    setSelectedLead(lead);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
          <Link href="/" className="text-red-600 hover:text-red-800 font-medium">
            Back to Home
          </Link>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-sm font-medium text-gray-500">Total Leads</h2>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-sm font-medium text-gray-500">From Popup</h2>
            <p className="text-2xl font-bold text-green-600">{stats.popup}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-sm font-medium text-gray-500">From Pre-Landing</h2>
            <p className="text-2xl font-bold text-blue-600">{stats.preLanding}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-sm font-medium text-gray-500">Today</h2>
            <p className="text-2xl font-bold text-red-600">{stats.today}</p>
          </div>
        </div>
        
        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Source</label>
              <div className="flex space-x-2">
                <button 
                  className={`px-4 py-2 text-sm rounded-md ${
                    filter === 'all' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`px-4 py-2 text-sm rounded-md ${
                    filter === 'popup' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilter('popup')}
                >
                  Popup
                </button>
                <button 
                  className={`px-4 py-2 text-sm rounded-md ${
                    filter === 'pre-landing' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilter('pre-landing')}
                >
                  Pre-Landing
                </button>
              </div>
            </div>
            
            <button 
              onClick={fetchLeads}
              className="ml-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Refresh Data
            </button>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Lead Details</h2>
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">ID</h3>
                    <p className="text-gray-900 break-all">{selectedLead.id}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Name</h3>
                      <p className="text-gray-900">{selectedLead.name || 'N/A'}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="text-gray-900">{selectedLead.email || 'N/A'}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Source</h3>
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${selectedLead.source === 'popup' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {selectedLead.source || 'N/A'}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date</h3>
                      <p className="text-gray-900">{selectedLead.formattedDate}</p>
                    </div>
                  </div>
                  
                  {selectedLead.guides && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Guides</h3>
                      <ul className="list-disc pl-5 mt-1">
                        {selectedLead.guides.map((guide, index) => (
                          <li key={index} className="text-gray-700">{guide}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedLead.energyLevel && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Energy Level</h3>
                      <p className="text-gray-900">{selectedLead.energyLevel}</p>
                    </div>
                  )}
                  
                  {selectedLead.mainGoal && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Main Goal</h3>
                      <p className="text-gray-900">{selectedLead.mainGoal}</p>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">All Data</h3>
                    <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto max-h-40">
                      {JSON.stringify(selectedLead, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-700">No leads found. Start collecting leads to see them here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{lead.name || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{lead.email || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${lead.source === 'popup' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {lead.source || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.formattedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleViewDetails(lead)}
                          className="text-red-600 hover:text-red-800"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 