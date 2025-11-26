import { cn } from '@/lib/utils';
import { Facebook, Github, Linkedin } from 'lucide-react';

interface MySocialMediaProps {
    className?: string;
}

export default function MySocialMedia({ className }: MySocialMediaProps) {
    return (
        <div className={cn('flex items-center justify-center gap-4', className)}>
            <a href="https://github.com/TheChickenDev" target="_blank" rel="noopener noreferrer">
                <Github className="text-secondary h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/nam.nguyens.359" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-secondary h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/nam-nguyen-thanh-5a51b3278/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-secondary h-6 w-6" />
            </a>
        </div>
    );
}
