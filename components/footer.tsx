import React from "react";
import { Link } from "@nextui-org/link";
export const Footer: React.FC = () => {
    return (
      <footer>
        <div className="container px-5 py-8 mx-auto flex items-center sm: flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                © {(new Date()).getFullYear()} Prince Sharma —
                <Link
                    href="https://linkedin.com/in/princesharma74"
                    className="text-gray-600 ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    @princesharma74
                </Link>
            </p>
        </div>
      </footer>
    );
  };
  
  