import React from 'react';
import { ModalProvider } from './contexts/ModalContext';
import { Modal } from './components/Modal';
import { ActionPanel } from './components/ActionPanel';
import { InfoPanel } from './components/InfoPanel';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Modal Management Pattern</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-medium mb-4">Action Panel</h2>
              <ActionPanel />
            </div>

            <div>
              <InfoPanel />
            </div>
          </div>
        </main>

        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;