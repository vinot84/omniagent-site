import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WatchDemoModal: React.FC<WatchDemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>OmniAgent Demo</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="rounded-lg"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WatchDemoModal;