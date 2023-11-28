import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"
import { forwardRef } from "react"

export const Translate = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = "1.3em", ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          fill="currentColor"
          d="M230.2,356.821l14.425-30.654a573.693,573.693,0,0,1-40.421-44.777q15.881-21.418,29.594-43.958A543.369,543.369,0,0,0,292.212,104H344V72H200V16H168V72H16v32H75.77a545.123,545.123,0,0,0,71.448,153.959c6.811-8.406,13.706-17.432,20.566-27.031A512.677,512.677,0,0,1,109.13,104H258.867c-29.727,97.53-84.546,169.208-126.64,213.119-48.993,51.107-91.952,76.86-92.38,77.114l1.621,2.738L48,408l8.14,13.774c1.873-1.106,46.474-27.729,98.389-81.68q15.38-15.982,29.44-32.931A608.138,608.138,0,0,0,230.2,356.821Z"
        />
        <path
          fill="currentColor"
          d="M333.722,200,328,212.516,209.379,472h35.185l36.571-80h141.73l36.571,80h35.185L370.278,200ZM328,360H295.764L328,289.484l24-52.5L408.236,360Z"
        />
      </Icon>
    )
  },
)

Translate.displayName = "Translate"
