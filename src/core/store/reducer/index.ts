import {healthReducer} from '../../../screens/health/store/reducer';
import {profileReducer} from '../../../screens/profile/store/reducer';
import {scheduleReducer} from '../../../screens/reminders/store/reducer';

export const rootReducer = {
  profileReducer,
  healthReducer,
  scheduleReducer,
};
