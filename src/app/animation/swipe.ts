import {
  trigger,
  animate,
  style,
  group,
  query,
  transition,
} from "@angular/animations";

export const swipe = trigger("swipe", [
  transition("* <=> *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    group([
      // block executes in parallel
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" })),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate(
            "0.5s ease-in-out",
            style({ transform: "translateX(-100%)" })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

// Doesn't work well
export const swipeVertical = trigger("swipeVert", [
  transition("* <=> *", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    group([
      // block executes in parallel
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" })),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate(
            "0.5s ease-in-out",
            style({ transform: "translateY(-100%)" })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);