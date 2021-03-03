/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
import { useState } from 'react';
import api from '../services/api';

export interface IUserData {
  label: string;
  value: string;
  color: string;
}

type UseActivityReturnType = {
  activities: IUserData[];
  getHighLight: () => Promise<void>;
};

const useActivity = (): UseActivityReturnType => {
  const [activities, setActivities] = useState([] as IUserData[]);

  const getHighLight = async (): Promise<void> => {
    const { status, data } = await api.get('/get_highlight');
    console.log(data);

    if (status !== 200) throw new Error('Error getting activities');
    setActivities(data);

    // const tempActivities = data.map((activity: ActivityJSONResponseType) => ({
    //   activityId: activity.activity_id,
    //   createdBy: UserJSONResponseParser(activity.user),
    //   createdAt: activity.created_at,
    //   action: activity.action,
    //   description: activity.description,
    //   modelId: activity.model_id,
    //   modelType: activity.model_type,
    //   collaborationId: activity.collaboration_id,
    // }));

    // const generatedOptions = generateDropdownOptions(tempActivities);

    // setOptions(generatedOptions);
    // setActivities(tempActivities);
    // setFilteredActivities(tempActivities);
    // setVisibleActivities(tempActivities);
  };

  return {
    activities,

    getHighLight,
  };
};

export default useActivity;
