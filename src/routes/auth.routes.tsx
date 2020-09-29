import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmenteCreated from '../pages/AppointmenteCreated';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312E38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />

    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="CreateAppointment" component={CreateAppointment} />
    <Auth.Screen name="AppointmenteCreated" component={AppointmenteCreated} />

    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AuthRoutes;
