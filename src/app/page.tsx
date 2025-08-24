import { BeakerIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="bg-black text-white">First project </div>
      <BeakerIcon className="w-8 h-8 text-blue-600" />
    </div>
  );
}
