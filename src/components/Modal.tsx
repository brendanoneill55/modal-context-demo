import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

export function Modal() {
  const { isOpen, modalType, modalData, closeModal } = useModal();

  const renderModalContent = () => {
    switch (modalType) {
      case 'settings':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
            <p className="text-gray-600">Configure your preferences for {modalData?.feature}</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Enable notifications</span>
              </label>
              <label className="flex items-center space-x-3 text-gray-700">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span>Dark mode</span>
              </label>
            </div>
          </div>
        );
      case 'userProfile':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">User Profile</h3>
            <div className="flex items-center space-x-4">
              <img
                src={modalData?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <p className="font-medium text-gray-900">{modalData?.name || "John Doe"}</p>
                <p className="text-sm text-gray-500">{modalData?.email || "john@example.com"}</p>
              </div>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Help & Support</h3>
            <p className="text-gray-600">Need assistance with {modalData?.topic}?</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="flex-shrink-0">📖</span>
                <p>Check our comprehensive documentation</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="flex-shrink-0">💬</span>
                <p>Contact our 24/7 support team</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="flex-shrink-0">📱</span>
                <p>Schedule a video call with an expert</p>
              </div>
            </div>
          </div>
        );
      default:
        return <p>Unknown modal type</p>;
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {renderModalContent()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}