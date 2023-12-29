"use client";

import { Features } from "../features";
import { AutomaticTrackingIcon } from "../icons/features/build-momentum-icons/automatic-tracking";
import { BePreparedIcon } from "../icons/features/build-momentum-icons/be-prepared";
import { FullyConfigurableIcon } from "../icons/features/build-momentum-icons/fully-configurable";
import { PredictDelaysIcon } from "../icons/features/build-momentum-icons/predict-delays";
import { ScheduledIcon } from "../icons/features/build-momentum-icons/scheduled";
import { ScopeCreepIcon } from "../icons/features/build-momentum-icons/scope-creep";

export const BuildMomentum = () => {
  return (
    <div id="contact">
      <Features color="40,87,255" colorDark="48,58,117">
        <Features.Main
          title={
            <>
              Contact Us
              <br />
            </>
          }
          image=""
          imageSize="small"
          text="Email us @ hermesdevelopergroup@gmail.com"
        />
        <Features.Grid
          features={[

          ]}
        />
      </Features>
    </div>
  );
};
