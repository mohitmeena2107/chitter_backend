const corsOptions = {
  origin: true, // or '*' if you're not using credentials
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // only include this if you are using cookies or Authorization headers
};
