
import Timer from '../app/components/Timer';
import InformationSection from './components/InformationSection';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

export default function Home() {
  const handleTimerEnd = () => {
    alert('Time is up!');
  };
  return (
    <main className="flex flex-col items-center justify-between m-20">
      <h1 className="text-5xl font-bold italic ">PomoZen</h1>
      <h2 className="m-2">Calm Productivity</h2>
      <Timer initialMinutes={25} />
      <TodoList />
      <InformationSection />
      <Footer />
    </main>
  );
}
