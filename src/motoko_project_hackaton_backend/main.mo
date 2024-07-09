import Array "mo:base/Array";
import Debug "mo:base/Debug";

actor {

  type Sample = {
    id: Text;
    dateTime: Text;
    pH: Float;
    temperature: Float;
    turbidity: Nat;
    tds: Nat;
    quantity: Float;
  };

  var initial_sample: [Sample] = [
    {
      id = "872910203810";
      dateTime = "2024-07-27T16:56:00";
      pH = 7.8;
      temperature = 23.5;
      turbidity = 430;
      tds = 230;
      quantity = 23.7;
    }
  ];

    var final_sample: [Sample] = [
    {
      id = "872910203402";
      dateTime = "2024-07-27T17:34:00";
      pH = 8.7;
      temperature = 23.5;
      turbidity = 215;
      tds = 120;
      quantity = 19.9;
    }
  ];

  public query func getInitialSamples() : async [Sample] {
    Debug.print(debug_show(initial_sample));
    return initial_sample;
  };

  public query func getFinalSamples() : async [Sample] {
    return final_sample;
  };

  public func addInitialSample(sampleToAdd : Sample) : async Sample {
    initial_sample := Array.append<Sample>(initial_sample, [sampleToAdd]);
    Debug.print(debug_show(initial_sample));
    return sampleToAdd;
  };

  public func addFinalSample(sampleToAdd : Sample) : async Sample {
    final_sample := Array.append<Sample>(final_sample, [sampleToAdd]);
    return sampleToAdd;
  }
};
