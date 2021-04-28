import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import streamifier from "streamifier";

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({
    inHeader: {
      "Ocp-Apim-Subscription-Key": process.env.COMPUTER_VISION_API_KEY,
    },
  }),
  process.env.COMPUTER_VISION_ENDPOINT
);

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
