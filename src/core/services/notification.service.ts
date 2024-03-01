import {PermissionsAndroid, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';
import {Schedule} from '../model/schedule.model';
export class NotificationService {
  private static instance: NotificationService;

  private constructor() {}

  static getInstance() {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }
  public async requestPermission() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    }
    const hasPermission = await messaging().hasPermission();
    if (hasPermission === -1) {
      const request = await messaging().requestPermission();
      const enable =
        request === messaging.AuthorizationStatus.AUTHORIZED ||
        request === messaging.AuthorizationStatus.PROVISIONAL;
      return enable;
    }
    return true;
  }
  public async scheduleNotification(schedule: Schedule) {
    // Check if the user has granted the permission to send notifications
    const hasPermissions = await this.requestPermission();
    __DEV__ &&
      console.log(
        'dev ~ NotificationService ~ scheduleNotification ~ hasPermissions:',
        hasPermissions,
      );

    // If the user has granted the permission, schedule the notification
    if (hasPermissions) {
      console.log('====================================');
      console.log(new Date(Date.now() + 10 * 1000));
      console.log('====================================');
      //   Create a timestamp trigger for the notification
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP, // This is the type of trigger, we have other types of triggers as well
        timestamp: new Date().getTime() + 10000, // +date converts the date to timestamp
      };

      // Create the notification details
      const notificationDetails = {
        id: '1',
        title: `🔔 You asked for this reminder -  ${schedule?.GestationalWeek.week}`,
        body: 'Tap on it to check',
        android: {
          channelId: 'reminder',
          pressAction: {
            id: 'default',
          },
        },
        data: {
          id: '1',
          action: 'reminder',
          details: {
            name: schedule.Address,
            date: schedule.Date,
          },
        },
      };

      //   // Schedule the notification
      await notifee.createTriggerNotification(notificationDetails, trigger);
    }
  }
}
