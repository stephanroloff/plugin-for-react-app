<?php
/**
 * Plugin Name:       Plugin Scaffold
 * Description:       This is a Plugin Scaffold.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meraki
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

namespace PluginScaffold;
require __DIR__ . '/vendor/autoload.php';
define('MY_PLUGIN_PATH_PLUGIN_SCAFFOLD',plugin_dir_url(__FILE__));

$RegisterBlocks = new RegisterBlocks();


add_action('wp_enqueue_scripts', 
    function () {
        wp_enqueue_style('custom-style', get_template_directory_uri() . '/build/root-block/frontend.css');
        wp_enqueue_script('my-theme-script', get_template_directory_uri() . '/build/root-block/frontend.js', array('jquery'), null, true);
    }
);

namespace OtherNamespace;

// $CustomPostType = new CustomPostType();

