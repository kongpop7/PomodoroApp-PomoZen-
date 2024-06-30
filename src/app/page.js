
import Timer from '../app/components/Timer';
import InformationSection from './components/InformationSection';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

export default function Home() {
  const handleTimerEnd = () => {
    alert('Time is up!');
  };
  return (
    <main className="">
      <div className="h-screen">
        <Navbar />
        <Timer initialMinutes={25} />
        {/* <TodoList /> */}
      </div>
      <InformationSection />
      <Footer />
    </main>
  );
}