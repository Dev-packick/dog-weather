// src/components/shared/components/ErrorMessage.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <FaExclamationTriangle className="text-red-500 text-2xl" />
          <h3 className="text-xl font-bold text-red-800">Erreur</h3>
        </div>
        <p className="text-red-700 mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Réessayer
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;