// Notifications.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface NotificationsProps {
  title: string;
  description: string;
}

const Notifications: React.FC<NotificationsProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs flex items-start"
    >
      <FaCheckCircle className="text-green-500 mr-2" size={24} />
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Notifications;