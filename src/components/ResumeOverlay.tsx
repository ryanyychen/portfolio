'use client';

import React from 'react';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen } from '@/app/utils';

interface ResumeOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeOverlay: React.FC<ResumeOverlayProps> = ({ isOpen, onClose }) => {
    const isSmallScreen = useIsSmallScreen();
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center" onClick={onClose}>
            <div className="w-[90vw] md:w-[75vw] h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                    className="absolute top-2 md:top-4 right-2 md:right-4 homebutton hover:text-white z-60"
                    onClick={onClose}
                >
                Close
                </button>
                {isSmallScreen
                ? (
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center text-black">
                        <p className="mb-4 text-2xl font-quicksand">Mobile devices don&apos;t support embedded PDF viewing.</p>
                        <a
                            href={`${prefix}/YuYouChenResume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-accent text-xl font-quicksand"
                        >
                            Tap here to view or download the resume
                        </a>
                    </div>
                ) : (
                    <iframe
                        src={`${prefix}/YuYouChenResume.pdf`}
                        className="w-[100%] h-[100%]"
                        title="Resume"
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeOverlay;