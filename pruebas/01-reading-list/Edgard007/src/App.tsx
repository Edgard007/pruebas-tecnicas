import { Suspense } from "react";

// ==> Components
import Loading from "@components/Loading";
import Logger from "@common/layout/Logger";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Logger>
        <div className="App">Hello World</div>
      </Logger>
    </Suspense>
  );
};

export default App;
