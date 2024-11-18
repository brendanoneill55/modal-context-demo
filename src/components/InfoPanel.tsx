import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function InfoPanel() {
  const { openModal } = useModal();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">About Modal Management</h2>
        <p className="text-gray-600 mb-4">
          This example demonstrates a clean pattern for managing modal state globally using React Context.
          The implementation allows for multiple modal types and data passing.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Centralized modal state management</li>
          <li>Type-safe implementation</li>
          <li>Reusable modal components</li>
          <li>Clean and maintainable code structure</li>
        </ul>
      </div>

      <button
        onClick={() => openModal('help', { topic: 'implementation details' })}
        className="flex items-center space-x-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors w-full justify-center"
      >
        <AlertCircle className="h-5 w-5" />
        <span>Learn More About Implementation</span>
      </button>
    </div>
  );
}