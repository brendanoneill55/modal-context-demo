import React from 'react';
import { Settings, UserCircle, HelpCircle } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function ActionPanel() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => openModal('settings', { feature: 'Dashboard' })}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Settings className="h-5 w-5" />
        <span>Open Settings</span>
      </button>

      <button
        onClick={() => openModal('userProfile', {
          name: 'Sarah Wilson',
          email: 'sarah@example.com',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
        })}
        className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
      >
        <UserCircle className="h-5 w-5" />
        <span>View Profile</span>
      </button>

      <button
        onClick={() => openModal('help', { topic: 'modal management' })}
        className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        <HelpCircle className="h-5 w-5" />
        <span>Get Help</span>
      </button>
    </div>
  );
}