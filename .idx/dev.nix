{ pkgs, ... }: {
  # Let Project IDX know you are using nix.
  nix.enable = true;
  # Which nixpkgs channel to use.
  channel = "stable-24.05";
  # Use https://search.nixos.org/packages to find packages
  packages = [ pkgs.nodejs_20 ];
  # Sets environment variables in the workspace
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "msjsdiag.vscode-react-native"
      "expo.vscode-expo-tools"
      "ms-vscode.js-debug"
      "redhat.vscode-yaml"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        install = "npm install";
      };
      # Runs when a workspace is restarted
      onStart = {
        # This is an example of a command that will run on every workspace start.
        # start-expo = "npm start";
      };
    };
    # Autostart a preview of your app
    previews = [
      {
        # The name that shows up in the UI
        id = "web";
        # The command to run to start your app
        command = "npm run web";
        # Which port the app will be running on
        port = 8082;
        # What to do if the port is already in use.
        # "ask" | "restart" | "continue"
        onPortAlreadyInUse = "ask";
      }
    ];
  };
}