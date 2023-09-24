
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const RBENV_VERSION: string;
	export const TERM_PROGRAM: string;
	export const _P9K_TTY: string;
	export const SHELL: string;
	export const TERM: string;
	export const TMPDIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ZDOTDIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const TERM_SESSION_ID: string;
	export const ZSH: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const COMMAND_MODE: string;
	export const RBENV_ROOT: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PAGER: string;
	export const RBENV_HOOK_PATH: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const RUBY_CONFIGURE_OPTS: string;
	export const RBENV_ORIG_PATH: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const VSCODE_NONCE: string;
	export const P9K_SSH: string;
	export const P9K_TTY: string;
	export const LANG: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const RBENV_SHELL: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const RBENV_DIR: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const _P9K_SSH_TTY: string;
	export const RUBYLIB: string;
	export const COLORTERM: string;
	export const BUNDLE_GEMFILE: string;
	export const BUNDLER_ORIG_BUNDLE_BIN_PATH: string;
	export const BUNDLER_ORIG_BUNDLE_GEMFILE: string;
	export const BUNDLER_ORIG_BUNDLER_VERSION: string;
	export const BUNDLER_ORIG_BUNDLER_SETUP: string;
	export const BUNDLER_ORIG_GEM_HOME: string;
	export const BUNDLER_ORIG_GEM_PATH: string;
	export const BUNDLER_ORIG_MANPATH: string;
	export const BUNDLER_ORIG_PATH: string;
	export const BUNDLER_ORIG_RB_USER_INSTALL: string;
	export const BUNDLER_ORIG_RUBYLIB: string;
	export const BUNDLER_ORIG_RUBYOPT: string;
	export const GEM_HOME: string;
	export const BUNDLE_BIN_PATH: string;
	export const BUNDLER_VERSION: string;
	export const BUNDLER_SETUP: string;
	export const RUBYOPT: string;
	export const NODE_ENV: string;
	export const VITE_RUBY_ASSETS_DIR: string;
	export const VITE_RUBY_AUTO_BUILD: string;
	export const VITE_RUBY_BUILD_CACHE_DIR: string;
	export const VITE_RUBY_PUBLIC_OUTPUT_DIR: string;
	export const VITE_RUBY_CONFIG_PATH: string;
	export const VITE_RUBY_DEV_SERVER_CONNECT_TIMEOUT: string;
	export const VITE_RUBY_PUBLIC_DIR: string;
	export const VITE_RUBY_ENTRYPOINTS_DIR: string;
	export const VITE_RUBY_SOURCE_CODE_DIR: string;
	export const VITE_RUBY_SKIP_COMPATIBILITY_CHECK: string;
	export const VITE_RUBY_SKIP_PROXY: string;
	export const VITE_RUBY_HOST: string;
	export const VITE_RUBY_HTTPS: string;
	export const VITE_RUBY_PORT: string;
	export const VITE_RUBY_HIDE_BUILD_CONSOLE_OUTPUT: string;
	export const VITE_RUBY_VITE_BIN_PATH: string;
	export const VITE_RUBY_BASE: string;
	export const VITE_RUBY_SSR_BUILD_ENABLED: string;
	export const VITE_RUBY_SSR_ENTRYPOINT: string;
	export const VITE_RUBY_SSR_OUTPUT_DIR: string;
	export const VITE_RUBY_MODE: string;
	export const VITE_RUBY_ROOT: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		RBENV_VERSION: string;
		TERM_PROGRAM: string;
		_P9K_TTY: string;
		SHELL: string;
		TERM: string;
		TMPDIR: string;
		TERM_PROGRAM_VERSION: string;
		ZDOTDIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		TERM_SESSION_ID: string;
		ZSH: string;
		USER: string;
		LS_COLORS: string;
		COMMAND_MODE: string;
		RBENV_ROOT: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PAGER: string;
		RBENV_HOOK_PATH: string;
		LSCOLORS: string;
		PATH: string;
		RUBY_CONFIGURE_OPTS: string;
		RBENV_ORIG_PATH: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		PWD: string;
		VSCODE_NONCE: string;
		P9K_SSH: string;
		P9K_TTY: string;
		LANG: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		RBENV_SHELL: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		HOME: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		RBENV_DIR: string;
		LESS: string;
		LOGNAME: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		_P9K_SSH_TTY: string;
		RUBYLIB: string;
		COLORTERM: string;
		BUNDLE_GEMFILE: string;
		BUNDLER_ORIG_BUNDLE_BIN_PATH: string;
		BUNDLER_ORIG_BUNDLE_GEMFILE: string;
		BUNDLER_ORIG_BUNDLER_VERSION: string;
		BUNDLER_ORIG_BUNDLER_SETUP: string;
		BUNDLER_ORIG_GEM_HOME: string;
		BUNDLER_ORIG_GEM_PATH: string;
		BUNDLER_ORIG_MANPATH: string;
		BUNDLER_ORIG_PATH: string;
		BUNDLER_ORIG_RB_USER_INSTALL: string;
		BUNDLER_ORIG_RUBYLIB: string;
		BUNDLER_ORIG_RUBYOPT: string;
		GEM_HOME: string;
		BUNDLE_BIN_PATH: string;
		BUNDLER_VERSION: string;
		BUNDLER_SETUP: string;
		RUBYOPT: string;
		NODE_ENV: string;
		VITE_RUBY_ASSETS_DIR: string;
		VITE_RUBY_AUTO_BUILD: string;
		VITE_RUBY_BUILD_CACHE_DIR: string;
		VITE_RUBY_PUBLIC_OUTPUT_DIR: string;
		VITE_RUBY_CONFIG_PATH: string;
		VITE_RUBY_DEV_SERVER_CONNECT_TIMEOUT: string;
		VITE_RUBY_PUBLIC_DIR: string;
		VITE_RUBY_ENTRYPOINTS_DIR: string;
		VITE_RUBY_SOURCE_CODE_DIR: string;
		VITE_RUBY_SKIP_COMPATIBILITY_CHECK: string;
		VITE_RUBY_SKIP_PROXY: string;
		VITE_RUBY_HOST: string;
		VITE_RUBY_HTTPS: string;
		VITE_RUBY_PORT: string;
		VITE_RUBY_HIDE_BUILD_CONSOLE_OUTPUT: string;
		VITE_RUBY_VITE_BIN_PATH: string;
		VITE_RUBY_BASE: string;
		VITE_RUBY_SSR_BUILD_ENABLED: string;
		VITE_RUBY_SSR_ENTRYPOINT: string;
		VITE_RUBY_SSR_OUTPUT_DIR: string;
		VITE_RUBY_MODE: string;
		VITE_RUBY_ROOT: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
