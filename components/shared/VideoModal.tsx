import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[99999]"
      onClick={onClose} // Click outside to close
    >
      <div 
        className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click from propagating to overlay
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl"
        >
          ✕
        </button>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
