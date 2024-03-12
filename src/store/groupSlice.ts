import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../models/models";
interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

interface GroupsState {
  groups: Group[],
  status: string,
  privacyFilter: boolean | null,
  avatarFilter: string | null,
  friendsFilter: boolean | null
}

const initialState: GroupsState = {
  groups: [],
  status: '',
  privacyFilter: null,
  avatarFilter: null,
  friendsFilter: null
}


export const fetchGroups = createAsyncThunk('groups/fetchGroups', async (_, { rejectWithValue }) => {
  const response = await new Promise<GetGroupsResponse>(resolve => {
    setTimeout(() => {
      resolve({ result: 1, data: require('./groups.json') });
    }, 1000);
  });
  if (response.result && response.data) {

    return response.data;
  } else {
    return rejectWithValue('server error')
  }
});
const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    changePrivacyFilter(state, action: PayloadAction<boolean | null>) {
      state.privacyFilter = action.payload
    },
    changeAvatarFilter(state, action: PayloadAction<string | null>) {
      state.avatarFilter = action.payload
    },
    changeFriendsFilter(state, action: PayloadAction<boolean | null>) {
      state.friendsFilter = action.payload
    },
    clearFilters(state) {
      state.privacyFilter = null;
      state.avatarFilter = null;
      state.friendsFilter = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGroups.fulfilled, (state, action: PayloadAction<Group[]>) => {
        state.status = 'succeeded';
        state.groups = action.payload || [];
      })
      .addCase(fetchGroups.rejected, (state) => {
        state.status = 'failed';
      });
  },

});

export default groupsSlice.reducer;
export const {
  changePrivacyFilter,
  changeAvatarFilter,
  changeFriendsFilter,
  clearFilters,
} = groupsSlice.actions;

