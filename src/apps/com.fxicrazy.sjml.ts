import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fxicrazy.sjml',
  name: '联掌门户',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['.ui.welcome.WelcomeActivity'],
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '点击右上角跳过',
          matches:
            '[id="com.fxicrazy.sjml:id/ptgAdvertLayout"][visibleToUser=true]',
          position: {
            left: 'width*0.9',
            top: 'height*0.08',
          },
        },
      ],
    },
  ],
});
