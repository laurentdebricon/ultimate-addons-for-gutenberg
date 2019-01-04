/**
 * Block Icons
 */

const el = wp.element.createElement

const UAGB_Block_Icons = {
	"section": el("svg", { width: 20, height: 20 },
		el("path", { d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z" } ),
		el("path", { d: "M7.617 4.604h4.766v1.172h-4.766v-1.172z" } ),
		el("path", { d: "M8.998 14.385h-6.237v-6.238h6.238v6.238zM3.932 13.213h3.894v-3.894h-3.894v3.894z" } ),
		el("path", { d: "M17.24 11.852h-6.237v-3.705h6.238v3.705zM12.174 10.68h3.894v-1.361h-3.894v1.361z" } ),
		el("path", { d: "M11.588 13.024h5.066v1.172h-5.066v-1.172z" } )
	),
	"buttons": el("svg", { width: 20, height: 20 },
		el("path", { d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z" } ),
		el("path", { d: "M10.758 6.289h-7.421v7.421l12.987 0.001v-7.422h-5.566zM5.192 11.855v-3.711h3.711v3.711h-3.711zM14.469 11.855h-3.711v-3.711h3.711v3.711z" } )
	),
	"advanced_heading": el("svg", { width: 20, height: 20 },
		el("path", { d: "M0 18h20v2h-20v-2z" } ),
		el("path", { d: "M11 0h-2l-7.25 16h2.25l2.21-5h7.59l2.2 5h2.25l-7.25-16zM7.090 9l2.91-6.59 2.91 6.59h-5.82z" } )
	),
	"google_map": el("svg", { width: 20, height: 20 },
		el("path", { d: "M10 0c-4.112 0-7.458 3.347-7.458 7.461 0 6.13 6.716 12.115 7.002 12.367 0.131 0.115 0.293 0.172 0.456 0.172s0.326-0.058 0.456-0.172c0.286-0.252 7.002-6.237 7.002-12.367 0-4.114-3.345-7.461-7.458-7.461v0zM10 18.363c-1.485-1.439-6.077-6.265-6.077-10.902 0-3.353 2.726-6.080 6.077-6.080s6.077 2.728 6.077 6.080c0 4.637-4.592 9.463-6.077 10.902v0z" } ),
		el("path", { d: "M10 3.986c-1.904 0-3.453 1.559-3.453 3.475s1.549 3.476 3.453 3.476c1.904 0 3.453-1.559 3.453-3.476s-1.549-3.475-3.453-3.475v0zM10 9.555c-1.142 0-2.071-0.939-2.071-2.094s0.929-2.095 2.071-2.095 2.072 0.94 2.072 2.095c0 1.155-0.93 2.094-2.072 2.094v0z" } )
	),
	"info_box": el("svg", { width: 20, height: 20 },
		el("path", { d: "M0 1.992v16.016h20v-16.016h-20zM11.406 16.836h-10.234v-10.898h10.234v10.898zM18.828 16.836h-6.25v-2.852h6.25v2.852zM18.828 12.813h-6.25v-6.875h6.25v6.875zM1.172 4.766v-1.602h17.656v1.602h-17.656z" } ),
		el("path", { d: "M2.652 15.325h7.274v-7.877h-7.274v7.877zM3.824 8.62h4.931v5.534h-4.931v-5.534z" } ),
		el("path", { d: "M13.486 10.13h4.434v1.172h-4.434v-1.172z" } ),
		el("path", { d: "M13.486 7.448h4.434v1.172h-4.434v-1.172z" } )
	),
	"post_carousel": el("svg", { width: 20, height: 20 },
		el("path", { d: "M7.554 12.936h4.893v-5.871h-4.893v5.871zM8.888 8.399h2.224v3.202h-2.224v-3.202z" } ),
		el("path", { d: "M13.913 8.868l1.132 1.132-1.132 1.132 0.944 0.944 2.076-2.076-2.076-2.076-0.943 0.943z" } ),
		el("path", { d: "M5.144 7.924l-2.076 2.076 2.076 2.076 0.943-0.944-1.132-1.132 1.132-1.132-0.944-0.943z" } ),
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM1.32 18.62v-17.301h17.3v17.3h-17.3z" } )
	),
	"post_masonry": el("svg", { width: 20, height: 20 },
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM7.588 5.788h4.825v8.825h-4.825v-8.825zM12.413 1.381v3.025h-4.825v-3.025h4.825zM6.206 1.381v11.025h-4.825v-11.025h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-2.826h4.825v2.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z" } )
	),
	"post_grid": el("svg", { width: 20, height: 20 },
		el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.62 6.206h-4.825v-4.825h4.825v4.825zM18.62 12.413h-4.825v-4.825h4.825v4.825zM1.381 7.588h4.825v4.825h-4.825v-4.825zM7.588 7.588h4.825v4.825h-4.825v-4.825zM12.413 1.381v4.825h-4.825v-4.825h4.825zM6.206 1.381v4.825h-4.825v-4.825h4.825zM1.381 13.794h4.825v4.826h-4.825v-4.826zM7.588 18.62v-4.826h4.825v4.826h-4.825zM13.794 18.62v-4.826h4.825v4.826h-4.825z" } )
	),
	"testimonial": el("svg", { width: 20, height: 20 },
		el("path", { d: "M9.996 0c-5.516 0-9.996 4.479-9.996 9.997 0 5.523 4.48 10.003 9.996 10.003 5.524 0 10.004-4.48 10.004-10.003 0-5.518-4.48-9.997-10.004-9.997v0zM9.996 18.749c-4.821 0-8.745-3.926-8.745-8.752 0-4.822 3.923-8.746 8.745-8.746 4.829 0 8.753 3.924 8.753 8.746 0 4.826-3.924 8.752-8.753 8.752v0z" } ),
		el("path", { d: "M8.007 6.732l-0.292-0.201-0.006-0.012-0.019-0.006-0.214-0.098 0.006 0.012c-0.201-0.079-0.416-0.14-0.641-0.14-1.018 0-1.843 0.854-1.843 1.91s0.825 1.917 1.843 1.917c0.323 0 0.622-0.098 0.891-0.25-0.091 1.019-0.605 2.514-2.491 4.034-0.267 0.212-0.317 0.604-0.109 0.879 0.121 0.159 0.3 0.243 0.476 0.243 0.134 0 0.263-0.041 0.372-0.134 2.319-1.866 2.894-3.784 2.971-5.070 0.134-1.636-0.365-2.502-0.817-2.948l-0.128-0.134z" } ),
		el("path", { d: "M14.068 6.732l-0.293-0.201-0.008-0.012-0.017-0.006-0.214-0.098 0.006 0.012c-0.202-0.079-0.415-0.14-0.641-0.14-1.019 0-1.843 0.854-1.843 1.91s0.824 1.917 1.843 1.917c0.324 0 0.623-0.098 0.891-0.25-0.092 1.019-0.604 2.514-2.496 4.034-0.262 0.212-0.311 0.604-0.104 0.879 0.116 0.159 0.299 0.243 0.476 0.243 0.134 0 0.263-0.041 0.372-0.134 2.319-1.866 2.893-3.784 2.972-5.070 0.134-1.636-0.366-2.502-0.818-2.948l-0.128-0.134z" } )
	),
	"cf7_styler": el("svg", { width: 20, height: 20 },
		el("path", { d: "M0 2.969v14.063h20v-14.063h-20zM18.828 15.859h-17.656v-11.719h17.656v11.719z" } ),
		el("path", { d: "M11.758 13.516h5.898v1.172h-5.898v-1.172z" } ),
		el("path", { d: "M11.758 11.172h5.898v1.172h-5.898v-1.172z" } ),
		el("path", { d: "M11.758 8.828h5.898v1.172h-5.898v-1.172z" } ),
		el("path", { d: "M11.758 6.484h3.555v1.172h-3.555v-1.172z" } ),
		el("path", { d: "M16.484 6.484h1.172v1.172h-1.172v-1.172z" } ),
		el("path", { d: "M8.386 10.468c0.629-0.538 1.028-1.336 1.028-2.226 0-1.615-1.314-2.93-2.93-2.93s-2.93 1.314-2.93 2.93c0 0.89 0.4 1.688 1.028 2.226-1.307 0.687-2.2 2.057-2.2 3.633v0.586h8.203v-0.586c0-1.576-0.893-2.947-2.2-3.633zM6.484 6.484c0.969 0 1.758 0.789 1.758 1.758s-0.789 1.758-1.758 1.758-1.758-0.789-1.758-1.758 0.789-1.758 1.758-1.758zM3.614 13.516c0.272-1.336 1.456-2.344 2.871-2.344s2.599 1.008 2.871 2.344h-5.742z" } )
	),
	"content_timeline": el("svg", { width: 20, height: 20 },
		el("path", { d: "M9.375 0h1.25v20h-1.25v-20z" } ),
		el("path", { d: "M1.875 3.125h5v2.5h-5v-2.5zM0.625 6.875h7.5v-5h-7.5v5z" } ),
		el("path", { d: "M1.875 14.592h5v2.5h-5v-2.5zM0.625 18.342h7.5v-5h-7.5v5z" } ),
		el("path", { d: "M18.125 11.25h-5v-2.5h5v2.5zM11.875 7.5v5h7.5v-5h-7.5z" } )
	),
	"call_to_action": el("svg", { width: 20, height: 20 },
		el("path", { d: "M19.304 16.848l-2.352-2.352 1.192-1.192c0.154-0.154 0.224-0.373 0.187-0.588s-0.177-0.398-0.374-0.491l-9.486-4.494c-0.256-0.122-0.561-0.068-0.761 0.132s-0.253 0.505-0.132 0.761l4.494 9.485c0.093 0.197 0.277 0.336 0.492 0.373s0.434-0.033 0.588-0.187l1.192-1.192 2.353 2.352c0.131 0.131 0.303 0.196 0.474 0.196s0.343-0.065 0.474-0.196l1.659-1.659c0.262-0.262 0.262-0.686 0-0.948v0zM17.17 18.033l-2.353-2.352c-0.131-0.131-0.303-0.196-0.474-0.196s-0.343 0.065-0.474 0.196l-0.993 0.993-3.283-6.929 6.929 3.282-0.993 0.994c-0.262 0.262-0.262 0.686 0 0.948l2.352 2.352-0.711 0.711z" } ),
		el("path", { d: "M7.645 10.992h-5.804v-9.303h9.303v6.647c0 0.37 0.3 0.671 0.671 0.671s0.671-0.3 0.671-0.671v-7.317c0-0.37-0.3-0.671-0.671-0.671h-10.644c-0.37 0-0.671 0.3-0.671 0.671v10.644c0 0.371 0.3 0.671 0.671 0.671h6.474c0.37 0 0.671-0.3 0.671-0.671s-0.3-0.671-0.671-0.671v0z" } ),
	),
	"post_timeline": el("svg", { width: 20, height: 20 },
		el("path", { d: "M7.048 8.364c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h9.134c0.019 0.001 0.037 0.001 0.056 0 0.286-0.015 0.505-0.26 0.489-0.545v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.016-0.286-0.26-0.505-0.545-0.489h-9.134c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453zM8.138 3.456h8.044v4.363h-8.044v-4.363z" } ),
		el("path", { d: "M19.999 17.089v-5.453c0.001-0.019 0.001-0.037 0-0.056-0.015-0.286-0.26-0.505-0.545-0.489h-11.861c-0.019-0.001-0.037-0.001-0.056 0-0.286 0.015-0.505 0.26-0.489 0.545v5.453c-0.001 0.019-0.001 0.037 0 0.056 0.016 0.286 0.26 0.505 0.545 0.489h11.861c0.019 0.001 0.037 0.001 0.056 0 0.286-0.016 0.505-0.26 0.489-0.546zM18.909 16.544h-10.77v-4.363h10.77v4.363z" } ),
		el("path", { d: "M4.754 4.795c-0.286-1.279-1.554-2.083-2.833-1.797-1.083 0.242-1.853 1.203-1.854 2.312-0.028 1.102 0.725 2.071 1.8 2.318v4.417c-1.28 0.279-2.091 1.543-1.812 2.823 0.198 0.906 0.906 1.614 1.812 1.812h1.091c1.080-0.245 1.841-1.211 1.827-2.318 0.014-1.107-0.747-2.073-1.827-2.318v-4.417c1.279-0.286 2.083-1.555 1.797-2.833zM3.722 14.362c0 0.708-0.573 1.282-1.281 1.282-0 0-0.001 0-0.002 0-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.282c0.708-0.001 1.282 0.573 1.282 1.281zM2.44 6.592c-0.697-0.015-1.254-0.584-1.254-1.281s0.557-1.267 1.254-1.281c0.712-0 1.294 0.569 1.309 1.281-0.015 0.712-0.597 1.282-1.309 1.281z" } ),
		el("path", { d: "M9.229 5.365h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z" } ),
		el("path", { d: "M15.091 5.91h-5.862c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.546 0.545 0.546h5.863c0.301 0 0.545-0.244 0.545-0.546s-0.245-0.545-0.546-0.545z" } ),
		el("path", { d: "M9.229 14.090h3.136c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-3.136c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z" } ),
		el("path", { d: "M9.229 15.726h5.863c0.301 0 0.545-0.244 0.545-0.545s-0.244-0.545-0.545-0.545h-5.863c-0.301 0-0.545 0.244-0.545 0.545s0.244 0.545 0.545 0.545z" } )
	),
	"icon_list": el("svg", { width: 20, height: 20 },
		el("path", { d: "M1.44 15.48c-0.76 0-1.44 0.64-1.44 1.4s0.68 1.44 1.44 1.44 1.4-0.68 1.4-1.44c0-0.76-0.64-1.4-1.4-1.4v0z" } ),
		el("path", { d: "M1.44 8.6c-0.76 0-1.44 0.64-1.44 1.4s0.68 1.4 1.44 1.4 1.4-0.64 1.4-1.4c0-0.76-0.64-1.4-1.4-1.4v0z" } ),
		el("path", { d: "M6.56 4.4h12.12c0.72 0 1.32-0.56 1.32-1.28s-0.6-1.32-1.32-1.32h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.28 1.32 1.28v0z" } ),
		el("path", { d: "M1.44 1.68c-0.76 0-1.44 0.68-1.44 1.44s0.68 1.4 1.44 1.4 1.4-0.64 1.4-1.4-0.64-1.44-1.4-1.44v0z" } ),
		el("path", { d: "M18.68 8.68h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.32 1.32 1.32h12.12c0.72 0 1.32-0.6 1.32-1.32s-0.6-1.32-1.32-1.32v0z" } ),
		el("path", { d: "M18.68 15.56h-12.12c-0.72 0-1.32 0.6-1.32 1.32s0.6 1.32 1.32 1.32h12.12c0.72 0 1.32-0.6 1.32-1.32s-0.6-1.32-1.32-1.32v0z" } )
	),
	"team": el("svg", { width: 20, height: 20 },
		el("path", { d: "M20 14.124c0-1.17-0.35-2.3-1.013-3.268-0.477-0.696-1.091-1.274-1.803-1.703 0.838-0.794 1.362-1.915 1.362-3.158 0-2.399-1.952-4.351-4.351-4.351-1.423 0-2.755 0.704-3.565 1.859-0.206-0.030-0.416-0.046-0.63-0.046s-0.424 0.016-0.63 0.046c-0.81-1.155-2.142-1.859-3.565-1.859-2.399 0-4.351 1.952-4.351 4.351 0 1.242 0.524 2.364 1.362 3.158-0.712 0.429-1.326 1.008-1.803 1.703-0.663 0.968-1.014 2.098-1.014 3.268v2.42h4.195v1.813h11.611v-1.813h4.194v-2.42h-0zM14.195 2.717c1.807 0 3.277 1.47 3.277 3.278s-1.47 3.277-3.277 3.277c-0.032 0-0.065-0-0.097-0.001 0.002-0.007 0.005-0.014 0.007-0.021 0.056-0.159 0.102-0.322 0.14-0.488 0.003-0.012 0.006-0.024 0.008-0.035 0.010-0.045 0.018-0.090 0.027-0.136 0.004-0.021 0.008-0.043 0.012-0.064 0.007-0.041 0.013-0.081 0.018-0.122 0.004-0.029 0.008-0.057 0.011-0.085 0.004-0.036 0.009-0.072 0.012-0.109s0.006-0.074 0.008-0.111c0.002-0.029 0.004-0.059 0.006-0.088 0.003-0.063 0.004-0.127 0.005-0.19 0-0.004 0-0.009 0-0.014 0-0.002-0-0.005-0-0.007 0-0.065-0.002-0.129-0.005-0.193-0.001-0.019-0.002-0.037-0.003-0.056-0.003-0.054-0.007-0.109-0.012-0.163-0.001-0.012-0.002-0.024-0.004-0.037-0.162-1.568-1.153-2.911-2.582-3.531 0.616-0.692 1.507-1.103 2.45-1.103v0zM8.866 4.732c0.010-0.004 0.021-0.008 0.031-0.011 0.033-0.012 0.066-0.023 0.099-0.033 0.025-0.008 0.050-0.016 0.075-0.023 0.018-0.005 0.037-0.011 0.055-0.016 0.033-0.009 0.066-0.018 0.1-0.026 0.248-0.060 0.507-0.093 0.773-0.093s0.525 0.033 0.773 0.094c0.033 0.008 0.066 0.017 0.099 0.026 0.019 0.005 0.038 0.010 0.056 0.016 0.025 0.007 0.050 0.015 0.075 0.023 0.033 0.011 0.066 0.022 0.1 0.034 0.010 0.004 0.020 0.007 0.030 0.011 1.096 0.405 1.918 1.381 2.104 2.565 0.002 0.009 0.003 0.019 0.004 0.028 0.006 0.040 0.011 0.080 0.015 0.121 0.002 0.015 0.003 0.030 0.005 0.045 0.004 0.037 0.006 0.074 0.009 0.112 0.001 0.016 0.002 0.032 0.003 0.048 0.002 0.048 0.003 0.096 0.004 0.144 0 0.004 0 0.008 0 0.012 0 0.002-0 0.004-0 0.006 0 0.047-0.002 0.093-0.003 0.139-0.001 0.015-0.001 0.029-0.002 0.044-0.002 0.045-0.006 0.089-0.010 0.133-0.002 0.017-0.004 0.034-0.006 0.051-0.003 0.029-0.007 0.057-0.011 0.085-0.003 0.022-0.006 0.044-0.010 0.066-0.005 0.033-0.011 0.066-0.018 0.1-0.006 0.029-0.012 0.059-0.019 0.088-0.004 0.018-0.008 0.035-0.012 0.053-0.010 0.044-0.022 0.087-0.034 0.13-0.005 0.017-0.010 0.034-0.014 0.051-0.008 0.025-0.016 0.049-0.024 0.074-0.006 0.020-0.013 0.039-0.020 0.058-0.007 0.022-0.015 0.044-0.023 0.066-0.014 0.037-0.029 0.074-0.044 0.111-0.007 0.016-0.014 0.032-0.021 0.049-0.013 0.031-0.027 0.061-0.041 0.091l-0.005 0.011c-0.005 0.011-0.010 0.021-0.015 0.032-0.016 0.032-0.032 0.064-0.049 0.096-0.007 0.012-0.013 0.025-0.020 0.037-0 0.001-0.001 0.002-0.001 0.002-0.019 0.034-0.038 0.067-0.058 0.1-0.008 0.013-0.016 0.026-0.024 0.039-0.021 0.035-0.044 0.070-0.066 0.103-0.014 0.021-0.029 0.042-0.043 0.063-0.013 0.018-0.025 0.035-0.038 0.052-0.017 0.023-0.033 0.045-0.050 0.067-0.012 0.015-0.023 0.030-0.035 0.045-0.018 0.022-0.036 0.045-0.055 0.067-0.012 0.014-0.023 0.027-0.035 0.041-0.020 0.022-0.039 0.044-0.059 0.066-0.012 0.013-0.024 0.025-0.036 0.038-0.032 0.034-0.065 0.067-0.099 0.1-0.020 0.019-0.040 0.039-0.061 0.058-0.014 0.013-0.029 0.026-0.043 0.038-0.024 0.021-0.047 0.041-0.071 0.062-0.012 0.011-0.025 0.021-0.037 0.031-0.029 0.024-0.059 0.047-0.089 0.070-0.008 0.006-0.016 0.012-0.025 0.019-0.545 0.405-1.221 0.646-1.951 0.646s-1.406-0.24-1.951-0.646c-0.008-0.006-0.016-0.012-0.024-0.018-0.030-0.023-0.060-0.046-0.089-0.070-0.012-0.010-0.025-0.020-0.037-0.030-0.024-0.021-0.048-0.041-0.072-0.062-0.014-0.013-0.029-0.025-0.043-0.038-0.021-0.019-0.041-0.038-0.061-0.058-0.034-0.033-0.067-0.066-0.1-0.101-0.012-0.012-0.024-0.025-0.036-0.037-0.020-0.022-0.039-0.044-0.058-0.066-0.012-0.013-0.024-0.027-0.035-0.040-0.019-0.022-0.037-0.045-0.055-0.067-0.012-0.015-0.024-0.030-0.035-0.045-0.017-0.022-0.034-0.044-0.050-0.067-0.013-0.017-0.025-0.035-0.037-0.053-0.015-0.021-0.029-0.041-0.044-0.062-0.023-0.034-0.045-0.069-0.066-0.104-0.008-0.013-0.016-0.026-0.023-0.039-0.020-0.034-0.040-0.067-0.058-0.102-0.007-0.013-0.013-0.025-0.020-0.038-0.017-0.032-0.034-0.064-0.050-0.096-0.006-0.012-0.011-0.023-0.017-0.035-0.001-0.002-0.002-0.003-0.003-0.005-0.015-0.031-0.029-0.063-0.043-0.095-0.007-0.015-0.013-0.030-0.020-0.046-0.015-0.038-0.030-0.075-0.045-0.113-0.008-0.021-0.015-0.041-0.022-0.062s-0.015-0.043-0.022-0.064c-0.008-0.023-0.015-0.046-0.022-0.069-0.010-0.035-0.020-0.070-0.030-0.105-0.007-0.025-0.013-0.049-0.019-0.074-0.005-0.020-0.009-0.039-0.014-0.059-0.005-0.024-0.011-0.048-0.016-0.073-0.007-0.038-0.014-0.076-0.020-0.114-0.003-0.020-0.006-0.041-0.009-0.062-0.004-0.030-0.008-0.061-0.012-0.092-0.002-0.015-0.004-0.030-0.005-0.046-0.004-0.046-0.008-0.091-0.010-0.137-0.001-0.013-0.001-0.026-0.002-0.039-0.002-0.049-0.004-0.098-0.004-0.148 0-0.053 0.002-0.105 0.004-0.158 0-0.014 0.002-0.028 0.003-0.042 0.002-0.039 0.005-0.079 0.009-0.118 0.001-0.014 0.003-0.027 0.004-0.041 0.005-0.042 0.010-0.084 0.016-0.126 0.001-0.008 0.002-0.016 0.004-0.024 0.186-1.185 1.008-2.161 2.105-2.566v0zM2.528 5.995c0-1.807 1.47-3.278 3.277-3.278 0.943 0 1.834 0.411 2.45 1.103-1.43 0.621-2.421 1.964-2.582 3.533-0.001 0.011-0.002 0.021-0.003 0.032-0.005 0.056-0.009 0.112-0.013 0.168-0.001 0.017-0.002 0.034-0.003 0.052-0.003 0.067-0.005 0.135-0.005 0.202s0.002 0.137 0.005 0.205c0.001 0.027 0.003 0.055 0.005 0.082 0.003 0.039 0.005 0.079 0.009 0.118 0.003 0.035 0.007 0.070 0.011 0.104 0.004 0.030 0.007 0.060 0.012 0.090 0.005 0.040 0.011 0.079 0.018 0.118 0.004 0.023 0.008 0.046 0.013 0.070 0.008 0.044 0.016 0.088 0.025 0.131 0.003 0.014 0.007 0.028 0.010 0.043 0.036 0.161 0.082 0.319 0.136 0.473 0.003 0.010 0.007 0.020 0.010 0.030-0.032 0.001-0.065 0.001-0.097 0.001-1.807-0-3.277-1.47-3.277-3.277v0zM5.095 12.841c-0.012 0.019-0.023 0.038-0.035 0.056-0.025 0.040-0.049 0.079-0.072 0.12-0.013 0.022-0.026 0.045-0.039 0.067-0.021 0.037-0.042 0.075-0.062 0.112-0.013 0.024-0.025 0.047-0.038 0.071-0.019 0.037-0.039 0.075-0.057 0.113-0.012 0.024-0.024 0.048-0.035 0.071-0.019 0.040-0.037 0.080-0.055 0.12-0.010 0.022-0.020 0.044-0.030 0.065-0.021 0.048-0.041 0.097-0.060 0.145-0.006 0.014-0.012 0.028-0.018 0.043-0.025 0.063-0.048 0.127-0.071 0.191-0.005 0.015-0.010 0.029-0.015 0.044-0.017 0.049-0.034 0.098-0.049 0.148-0.007 0.023-0.014 0.046-0.021 0.069-0.013 0.042-0.025 0.084-0.037 0.127-0.007 0.025-0.014 0.051-0.020 0.076-0.010 0.041-0.021 0.082-0.030 0.122-0.006 0.026-0.012 0.052-0.018 0.078-0.009 0.041-0.018 0.083-0.026 0.125-0.005 0.025-0.010 0.050-0.015 0.075-0.008 0.046-0.016 0.091-0.023 0.137-0.003 0.021-0.007 0.043-0.011 0.064-0.010 0.067-0.019 0.134-0.027 0.202 0 0.001-0 0.002-0 0.002-0.007 0.062-0.013 0.123-0.018 0.185h-3.139v-1.346c0-1.839 1.057-3.491 2.714-4.276 0.604 0.317 1.29 0.498 2.017 0.498 0.211 0 0.422-0.015 0.631-0.046 0.033 0.047 0.066 0.093 0.1 0.138 0.012 0.015 0.024 0.030 0.036 0.045 0.034 0.043 0.068 0.086 0.104 0.128 0.014 0.017 0.029 0.034 0.044 0.051 0.033 0.038 0.067 0.076 0.102 0.113 0.018 0.020 0.036 0.039 0.055 0.058 0.031 0.032 0.064 0.065 0.096 0.096 0.012 0.012 0.024 0.024 0.036 0.036-0.047 0.028-0.093 0.057-0.139 0.087-0.008 0.005-0.015 0.010-0.022 0.015-0.046 0.030-0.091 0.060-0.136 0.091-0.016 0.011-0.031 0.021-0.046 0.032-0.040 0.028-0.079 0.057-0.119 0.086-0.012 0.009-0.025 0.018-0.037 0.028-0.050 0.038-0.099 0.076-0.148 0.116-0.011 0.008-0.021 0.017-0.032 0.026-0.039 0.032-0.077 0.064-0.115 0.097-0.015 0.013-0.029 0.025-0.044 0.038-0.038 0.034-0.075 0.067-0.113 0.102-0.010 0.009-0.020 0.018-0.029 0.027-0.046 0.043-0.091 0.087-0.135 0.131-0.012 0.012-0.023 0.023-0.034 0.035-0.034 0.035-0.067 0.070-0.1 0.105-0.013 0.014-0.026 0.028-0.039 0.043-0.037 0.041-0.074 0.081-0.11 0.123-0.006 0.006-0.012 0.013-0.017 0.019-0.041 0.048-0.081 0.097-0.121 0.146-0.011 0.014-0.022 0.028-0.033 0.042-0.029 0.038-0.059 0.076-0.088 0.115-0.011 0.015-0.023 0.030-0.034 0.045-0.038 0.052-0.075 0.104-0.111 0.157-0.039 0.057-0.076 0.114-0.113 0.172v0zM5.268 17.283v-1.346c0-0.060 0.001-0.119 0.003-0.178 0.001-0.020 0.002-0.039 0.003-0.058 0.002-0.039 0.004-0.079 0.007-0.118 0.002-0.024 0.004-0.048 0.007-0.071 0.003-0.035 0.006-0.070 0.010-0.104 0.003-0.025 0.007-0.050 0.010-0.076 0.004-0.033 0.008-0.065 0.013-0.098 0.004-0.026 0.009-0.052 0.013-0.078 0.005-0.031 0.010-0.063 0.016-0.094 0.005-0.027 0.011-0.053 0.016-0.079 0.006-0.030 0.012-0.061 0.019-0.091 0.006-0.027 0.013-0.053 0.019-0.079 0.007-0.030 0.014-0.059 0.022-0.089 0.007-0.027 0.015-0.053 0.023-0.080 0.008-0.029 0.016-0.058 0.025-0.086 0.008-0.027 0.017-0.053 0.026-0.079 0.009-0.028 0.018-0.056 0.028-0.084 0.009-0.026 0.019-0.053 0.029-0.079 0.010-0.028 0.020-0.055 0.030-0.082s0.021-0.052 0.031-0.078c0.011-0.027 0.022-0.054 0.033-0.081s0.023-0.051 0.034-0.077c0.012-0.026 0.024-0.053 0.036-0.079s0.025-0.051 0.037-0.076c0.013-0.026 0.025-0.051 0.039-0.077s0.026-0.050 0.040-0.075c0.014-0.025 0.027-0.050 0.041-0.075s0.028-0.049 0.043-0.073c0.014-0.025 0.029-0.049 0.044-0.074s0.030-0.048 0.046-0.072c0.015-0.024 0.031-0.048 0.046-0.072s0.032-0.047 0.048-0.071c0.016-0.024 0.032-0.047 0.049-0.070s0.034-0.046 0.051-0.069c0.017-0.023 0.034-0.046 0.051-0.068s0.036-0.045 0.054-0.067c0.018-0.022 0.036-0.044 0.054-0.066s0.037-0.044 0.056-0.065 0.038-0.043 0.056-0.064 0.039-0.042 0.058-0.063c0.019-0.021 0.039-0.042 0.058-0.062s0.040-0.041 0.061-0.061c0.020-0.020 0.041-0.040 0.061-0.060s0.041-0.039 0.063-0.059c0.021-0.020 0.042-0.039 0.063-0.058s0.043-0.038 0.065-0.057c0.022-0.019 0.044-0.038 0.066-0.056s0.045-0.036 0.067-0.054c0.023-0.018 0.045-0.036 0.068-0.054s0.046-0.035 0.069-0.052c0.023-0.017 0.047-0.035 0.071-0.052s0.047-0.033 0.071-0.050c0.024-0.016 0.049-0.033 0.073-0.049s0.048-0.031 0.072-0.047c0.025-0.016 0.050-0.032 0.075-0.047s0.049-0.029 0.074-0.044c0.026-0.015 0.052-0.030 0.078-0.045 0.025-0.014 0.050-0.028 0.075-0.041 0.027-0.014 0.054-0.028 0.080-0.042 0.025-0.013 0.051-0.026 0.077-0.039 0.020-0.010 0.041-0.020 0.061-0.029 0.603 0.317 1.289 0.498 2.017 0.498s1.414-0.18 2.017-0.498c0.021 0.010 0.041 0.019 0.061 0.029 0.026 0.013 0.052 0.026 0.078 0.039s0.053 0.028 0.079 0.042c0.026 0.014 0.051 0.028 0.077 0.042s0.052 0.029 0.077 0.044c0.025 0.015 0.050 0.030 0.075 0.045s0.050 0.031 0.075 0.047c0.025 0.015 0.049 0.031 0.073 0.047s0.048 0.032 0.072 0.049c0.024 0.017 0.048 0.033 0.071 0.050s0.047 0.034 0.070 0.051c0.023 0.017 0.047 0.035 0.069 0.053s0.046 0.035 0.068 0.053c0.022 0.018 0.045 0.036 0.067 0.055s0.044 0.037 0.066 0.055c0.022 0.019 0.043 0.038 0.065 0.057s0.042 0.039 0.063 0.058c0.021 0.020 0.042 0.039 0.063 0.059s0.041 0.040 0.061 0.060c0.020 0.021 0.041 0.041 0.061 0.062s0.039 0.041 0.058 0.062c0.020 0.021 0.039 0.043 0.058 0.064s0.038 0.043 0.056 0.064c0.019 0.022 0.038 0.043 0.056 0.066s0.036 0.043 0.054 0.065c0.018 0.022 0.036 0.045 0.054 0.068s0.034 0.045 0.051 0.067c0.017 0.023 0.034 0.046 0.051 0.070s0.032 0.046 0.049 0.070c0.016 0.023 0.033 0.047 0.048 0.071s0.031 0.047 0.046 0.071c0.015 0.024 0.031 0.048 0.046 0.072s0.029 0.049 0.044 0.073c0.014 0.024 0.029 0.049 0.043 0.074s0.027 0.050 0.041 0.075c0.013 0.025 0.027 0.050 0.040 0.075s0.026 0.051 0.038 0.077c0.013 0.025 0.025 0.050 0.037 0.076s0.024 0.052 0.036 0.079c0.012 0.026 0.023 0.051 0.034 0.077s0.022 0.054 0.033 0.080c0.011 0.026 0.021 0.052 0.032 0.079s0.020 0.055 0.030 0.082c0.010 0.026 0.020 0.052 0.029 0.079 0.010 0.028 0.019 0.056 0.028 0.084 0.009 0.027 0.017 0.053 0.026 0.079 0.009 0.029 0.017 0.058 0.025 0.087 0.008 0.026 0.015 0.053 0.022 0.079 0.008 0.029 0.015 0.059 0.022 0.089 0.006 0.027 0.013 0.053 0.019 0.079 0.007 0.030 0.013 0.061 0.019 0.091 0.005 0.026 0.011 0.053 0.016 0.079 0.006 0.031 0.011 0.062 0.016 0.094 0.004 0.026 0.009 0.052 0.013 0.079 0.005 0.032 0.009 0.065 0.013 0.097 0.003 0.025 0.007 0.051 0.010 0.076 0.004 0.034 0.007 0.069 0.010 0.104 0.002 0.024 0.005 0.047 0.007 0.071 0.003 0.040 0.005 0.079 0.006 0.119 0.001 0.019 0.003 0.039 0.003 0.058 0.002 0.059 0.003 0.119 0.003 0.178v1.346h-9.463zM15.787 15.47c-0.010-0.13-0.026-0.261-0.045-0.39-0.003-0.021-0.007-0.041-0.010-0.061-0.008-0.047-0.015-0.094-0.024-0.14-0.005-0.024-0.010-0.049-0.014-0.074-0.008-0.042-0.017-0.085-0.027-0.127-0.006-0.025-0.012-0.051-0.018-0.076-0.010-0.041-0.020-0.083-0.031-0.124-0.007-0.025-0.013-0.050-0.020-0.075-0.012-0.043-0.024-0.086-0.037-0.128-0.007-0.023-0.013-0.045-0.020-0.067-0.016-0.050-0.033-0.101-0.050-0.151-0.005-0.014-0.009-0.028-0.014-0.042-0.023-0.064-0.047-0.128-0.072-0.191-0.005-0.013-0.011-0.027-0.017-0.041-0.020-0.049-0.040-0.098-0.061-0.147-0.009-0.021-0.019-0.043-0.029-0.064-0.018-0.041-0.037-0.081-0.056-0.121-0.011-0.024-0.023-0.047-0.034-0.070-0.019-0.038-0.038-0.076-0.058-0.114-0.012-0.023-0.025-0.047-0.038-0.071-0.021-0.038-0.041-0.075-0.063-0.113-0.013-0.022-0.025-0.045-0.038-0.067-0.023-0.040-0.048-0.080-0.073-0.12-0.012-0.019-0.022-0.038-0.034-0.056-0.037-0.058-0.074-0.115-0.113-0.172-0.037-0.053-0.074-0.105-0.111-0.157-0.011-0.015-0.022-0.029-0.033-0.045-0.029-0.039-0.058-0.077-0.088-0.115-0.011-0.014-0.021-0.028-0.032-0.041-0.040-0.049-0.080-0.098-0.121-0.146-0.005-0.006-0.011-0.012-0.016-0.018-0.036-0.042-0.073-0.084-0.111-0.125-0.013-0.014-0.026-0.028-0.039-0.042-0.033-0.036-0.067-0.071-0.101-0.105-0.011-0.012-0.022-0.023-0.034-0.034-0.044-0.044-0.089-0.088-0.135-0.131-0.010-0.009-0.019-0.018-0.029-0.027-0.037-0.035-0.075-0.069-0.113-0.102-0.015-0.013-0.029-0.025-0.044-0.038-0.038-0.033-0.076-0.065-0.115-0.097-0.011-0.009-0.021-0.018-0.032-0.026-0.048-0.039-0.098-0.078-0.148-0.116-0.012-0.009-0.025-0.018-0.037-0.028-0.039-0.029-0.079-0.057-0.119-0.085-0.015-0.011-0.031-0.022-0.047-0.033-0.044-0.031-0.089-0.061-0.134-0.090-0.008-0.005-0.016-0.011-0.024-0.016-0.046-0.029-0.092-0.058-0.138-0.086 0.012-0.012 0.023-0.024 0.035-0.035 0.033-0.032 0.066-0.065 0.098-0.098 0.018-0.019 0.036-0.037 0.054-0.056 0.035-0.038 0.070-0.076 0.103-0.115 0.014-0.017 0.029-0.033 0.043-0.050 0.036-0.043 0.071-0.086 0.105-0.13 0.011-0.014 0.023-0.029 0.034-0.043 0.034-0.046 0.068-0.092 0.101-0.138 0.21 0.031 0.421 0.046 0.631 0.046 0.728 0 1.414-0.18 2.017-0.498 1.657 0.785 2.714 2.436 2.714 4.276v1.346h-3.139z" } )
	),	
	"social_share": el("svg", { width: 20, height: 20 },
		el("path", { d: "M13.751 4.999l1.25 1.25-8.753 8.753-1.25-1.25 8.753-8.753z" } ),
		el("path", { d: "M13.749 12.502l-1.874-1.874 1.255-1.256 0.619 0.628 3.749-3.749-3.749-3.749-3.749 3.749 0.628 0.619-1.256 1.255-1.874-1.874 6.251-6.251 6.251 6.251-6.251 6.251z" } ),
		el("path", { d: "M6.251 20l-6.251-6.251 6.251-6.251 1.874 1.874-1.255 1.256-0.619-0.628-3.749 3.749 3.749 3.749 3.749-3.749-0.628-0.619 1.256-1.256 1.874 1.874-6.251 6.251z" } )
	),
	"restaurant_menu": el("svg", { width: 20, height: 20 },
		el("path", { d:"M0 2.136v15.729h20v-15.729h-20zM18.828 7.038h-8.242v-3.73h8.242v3.73zM1.172 3.307h8.242v13.385h-8.242v-13.385zM10.586 16.693v-8.483h8.242v8.483h-8.242z"} ),
		el("path", { d:"M2.742 4.661v4.492c0 1.188 0.826 2.185 1.934 2.45v2.563h-0.898v1.172h2.969v-1.172h-0.898v-2.563c1.108-0.265 1.934-1.263 1.934-2.45v-4.492h-5.039zM6.61 9.154c0 0.743-0.605 1.348-1.348 1.348s-1.348-0.604-1.348-1.348v-3.32h2.695v3.32z"} ),
		el("path", { d:"M13.050 4.661h3.275v1.172h-3.275v-1.172z"} ),
		el("path", { d:"M12.109 9.414h5.156v1.172h-5.156v-1.172z"} ),
		el("path", { d:"M12.109 11.79h5.156v1.172h-5.156v-1.172z"} ),
		el("path", { d:"M12.109 14.167h5.156v1.172h-5.156v-1.172z"} ),
	),
	"columns": el("svg", { width: 20, height: 20 },
		el("path", { d: "M1.2 1.2v17.6h17.6v-17.6h-17.6zM17.793 17.794h-15.586v-15.587h15.586v15.587z" } ),
		el("path", { d: "M3.464 3.464h3.519v13.072h-3.519v-13.072z" } ),
		el("path", { d: "M8.24 3.464h3.521v13.072h-3.521v-13.072z" } ),
		el("path", { d: "M13.018 3.464h3.518v13.072h-3.518v-13.072z" } ),
	),
}

export default UAGB_Block_Icons
