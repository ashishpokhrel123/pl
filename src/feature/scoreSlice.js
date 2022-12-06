import ScoreService from "../service/scoreService";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  status: null,
  error: null,
  message: null,
  loading: null,
  score: [],
};

export const fetchScore = createAsyncThunk("fetchScore", async () => {
  const result = await ScoreService.getFootballScore();
  console.log(result, "result");
  return result;
});

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchScore.pending]: (state, action) => {
    //   state.status = action.payload.status;
    // },
    [fetchScore.fulfilled]: (state, action) => {
      state.score = action.payload;
      // state.status = action.payload.status;
    },
    // [fetchScore.rejected]: (state, action) => {
    //   state.status = action.payload.status;
    // },
  },
});

export default scoreSlice.reducer;
