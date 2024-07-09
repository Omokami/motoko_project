import SampleRecord from "../components/SampleRecord";
import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import { useAuth } from "@bundly/ares-react";
import { motoko_project_hackaton_backend } from 'declarations/motoko_project_hackaton_backend';


const Initial = () => {
  const { isAuthenticated } = useAuth();

  const [alert, setAlert] = useState(null);
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    async function validate() {
      setAlert(null);
      if (!isAuthenticated) {
        setAlert({
          type: 'alert',
          message: 'You need to be authenticated to see this page',
        });
        return;
      }
      try {
        const response = await motoko_project_hackaton_backend.getInitialSamples();
        setSamples(response);
      } catch (error) {
        setAlert({
          type: 'alert',
          message: 'An error occurred while fetching the data',
        });
        return
      }
      if (samples.length === 0) {
        setAlert({
          type: 'alert',
          message: 'No samples found',
        });
        return;
      }
      setAlert(null);
    }
    validate();
  }, [samples.length, isAuthenticated]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Initial Tests History</h1>
        {
          samples.length === 0 || alert ? (
            <Alert data={alert} />
          ) : (
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {samples.map(sample => (
                <SampleRecord key={sample.id} data={sample} />
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Initial;
