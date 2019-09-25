import { trigger, animate, transition, style} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      '.5s',
      style({
        opacity: 1,
      })
    )
  ])
]);
