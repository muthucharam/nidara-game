// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  debugMode: true,
  FRONTENDURL:"http://localhost:4200/#/",
  SERVERURL: "http://services.expedux.in",
  AUTHSERVERURL: "http://services.expedux.in",
  SERVERURL_WP:"http://wpni.expedux.in",
  SERVERPORT: "",
  SERVERPORT_WP:"",
  environment_type: 3,
  s3GameURL:"https://s3.amazonaws.com/nidara.games"
};