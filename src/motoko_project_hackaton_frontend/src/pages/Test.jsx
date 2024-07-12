import { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import { useAuth } from '@bundly/ares-react';
import Spinner from '../components/Spinner';
import CardTest from '../components/CardTest';
import { motoko_project_hackaton_backend } from 'declarations/motoko_project_hackaton_backend';


const Test = () => {
  const { isAuthenticated } = useAuth();
  const [alert, setAlert] = useState(null);

  const [loading, setLoading] = useState({ initial: false, final: false });
  const [initialTestData, setInitialTestData] = useState(null);
  const [finalTestData, setFinalTestData] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setAlert({
        type: 'alert',
        message: 'You need to be authenticated to see this page',
      });
    } else {
      setAlert(null);
    }
  }, [isAuthenticated]);

  const handleInitialTest = async () => {
    setLoading({ ...loading, initial: true });
    try {
      const initialSample = {
        id: String(Date.now()),
        dateTime: String(new Date('2024-07-07T14:30:00')), // Adjusted date format
        tds: 150,
        temperature: 25,
        pH: 7.5,
        turbidity: 5,
        quantity: 100,
      }
      const response = await motoko_project_hackaton_backend.addInitialSample(initialSample);
      console.log(response);
      setInitialTestData(response); // Assuming backend returns the saved sample
    } catch (error) {
      console.error('Error adding initial sample:', error);
      // Handle error display or retry logic
    } finally {
      setLoading({ ...loading, initial: false });
    }
  };

  const handleFinalTest = async () => {
    setLoading({ ...loading, final: true });
    try {
      const finalSample = {
        id: String(Date.now()),
        dateTime: String(new Date('2024-07-07T14:30:00')),
        tds: 150,
        temperature: 25,
        pH: 7.5,
        turbidity: 5,
        quantity: 100,
      }
      const response = await motoko_project_hackaton_backend.addFinalSample(finalSample);
      console.log(response);
      setFinalTestData(response);
    } catch (error) {
      console.error('Error adding final sample:', error);
      // Handle error display or retry logic
    } finally {
      setLoading({ ...loading, final: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Test Actions</h1>
        {alert ? (
          <Alert data={alert} />
        ) : (
          <>
            <div className="mb-4">
              <button
                onClick={handleInitialTest}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                disabled={loading.initial || !isAuthenticated}
              >
                Start Initial Test
              </button>
              {loading.initial && (
                <Spinner color="blue" />
              )}
              {initialTestData && !loading.initial && (
                <CardTest color="blue" data={initialTestData} title="Initial Test Data"/>
              )}
            </div>
            <div>
              <button
                onClick={handleFinalTest}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                disabled={loading.final || !isAuthenticated}
              >
                Start Final Test
              </button>
              {loading.final && (
                <Spinner color="green" />
              )}
              {finalTestData && !loading.final && (
                <CardTest color="green" data={finalTestData} title="Final Test Data"/>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
