// pages/index.js

import Navbar from './components/Navbar';
import InformationSection from './components/InformationSection';

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
        <InformationSection />
      </div>
    </main>
  );
}
