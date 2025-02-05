import React from 'react';
const Modal: React.FC<{
    children: React.ReactNode; onClose: () => void
}> = ({ children, onClose }) => {

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        };
    };

    return (
        <div onClick={handleCloseModal} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className="bg-white p-6 rounded-lg shadow relative">
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-700 cursor-pointer hover:text-red-500 transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    )
}

export default Modal;
