import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fxicrazy.sjml',
  name: '联掌门户',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        '.ui.welcome.WelcomeActivity',
        '.ui.welcome.SplashAdActivity',
      ],
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '返回跳过广告',
          action: 'back',
          actionDelay: 1000,
          matches:
            '[id="com.fxicrazy.sjml:id/ptgAdvertLayout"][visibleToUser=true]',
        },
      ],
    },
  ],
});
