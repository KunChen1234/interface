import './App.css';

function App() {
  return (
    <div class="grid grid-flow-4 h-screen">
      <div class="bg-black grid grid-cols-3 gap-2">
        <div class="text-white text-sm">aa</div>
        <div class="text-center ">
          <p class="text-white text-sm">ck</p>
        </div>
        <div class="grid grid-flow-3 text-white text-sm text-right">
          <div class="row-span-2 text-sm">bb</div>
          <div class="mb-0">dd</div>
        </div>
      </div>
      <div class="row-span-2 items-center">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg  items-center space-x-4">
          <p class="text-xl font-medium text-primary">ChitChat</p>
          <p class="text-secondary">You have a new message!</p>
        </div>
      </div>
      <div class="bg-black">bottom</div>
    </div>
  );
}

export default App;
