<?php
/**
 * UAGB Loader.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Loader' ) ) {

	/**
	 * Class UAGB_Loader.
	 */
	final class UAGB_Loader {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			// Activation hook.
			register_activation_hook( UAGB_FILE, array( $this, 'activation_reset' ) );

			// deActivation hook.
			register_deactivation_hook( UAGB_FILE, array( $this, 'deactivation_reset' ) );

			$this->define_constants();

			$this->loader();

			add_action( 'plugins_loaded', array( $this, 'load_plugin' ) );
		}

		/**
		 * Loads Other files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function loader() {
			require_once UAGB_DIR . 'classes/class-uagb-helper.php';
			require_once UAGB_DIR . 'classes/class-uagb-update.php';
		}

		/**
		 * Defines all constants
		 *
		 * @since 1.0.0
		 */
		public function define_constants() {
			define( 'UAGB_BASE', plugin_basename( UAGB_FILE ) );
			define( 'UAGB_DIR', plugin_dir_path( UAGB_FILE ) );
			define( 'UAGB_URL', plugins_url( '/', UAGB_FILE ) );
			define( 'UAGB_VER', '1.14.6.1' );
			define( 'UAGB_MODULES_DIR', UAGB_DIR . 'modules/' );
			define( 'UAGB_MODULES_URL', UAGB_URL . 'modules/' );
			define( 'UAGB_SLUG', 'uag' );
			define( 'UAGB_TABLET_BREAKPOINT', '976' );
			define( 'UAGB_MOBILE_BREAKPOINT', '767' );
		}

		/**
		 * Loads plugin files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load_plugin() {

			$this->load_textdomain();

			require_once UAGB_DIR . 'classes/class-uagb-core-plugin.php';
			require_once UAGB_DIR . 'dist/blocks/post/index.php';
			require_once UAGB_DIR . 'dist/blocks/post-timeline/index.php';
			require_once UAGB_DIR . 'dist/blocks/cf7-styler/index.php';
			require_once UAGB_DIR . 'dist/blocks/gf-styler/index.php';
		}

		/**
		 * Check if Gutenberg is active
		 *
		 * @since 1.1.0
		 *
		 * @return boolean
		 */
		public function is_gutenberg_active() {
			return function_exists( 'register_block_type' );
		}

		/**
		 * Load Ultimate Gutenberg Text Domain.
		 * This will load the translation textdomain depending on the file priorities.
		 *      1. Global Languages /wp-content/languages/ultimate-addons-for-gutenberg/ folder
		 *      2. Local dorectory /wp-content/plugins/ultimate-addons-for-gutenberg/languages/ folder
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function load_textdomain() {

			/**
			 * Filters the languages directory path to use for AffiliateWP.
			 *
			 * @param string $lang_dir The languages directory path.
			 */
			$lang_dir = apply_filters( 'uagb_languages_directory', UAGB_ROOT . '/languages/' );

			load_plugin_textdomain( 'ultimate-addons-for-gutenberg', false, $lang_dir );
		}

		/**
		 * Activation Reset
		 */
		public function activation_reset() {
			update_option( '__uagb_do_redirect', true );
		}

		/**
		 * Deactivation Reset
		 */
		public function deactivation_reset() {
			update_option( '__uagb_do_redirect', false );
		}
	}

	/**
	 *  Prepare if class 'UAGB_Loader' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Loader::get_instance();
}

/**
 * Is Gutenberg plugin installed.
 */
if ( ! function_exists( '_is_gutenberg_installed' ) ) {

	/**
	 * Check if Gutenberg Pro is installed
	 *
	 * @since 1.0.0
	 *
	 * @param string $plugin_path Plugin path.
	 * @return boolean true | false
	 * @access public
	 */
	function _is_gutenberg_installed( $plugin_path ) {
		$plugins = get_plugins();

		return isset( $plugins[ $plugin_path ] );
	}
}
