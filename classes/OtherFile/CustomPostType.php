<?php

namespace OtherNamespace;

if(! class_exists('OtherNamespace\CustomPostType')){
    class CustomPostType {

        function __construct(){
            add_action( 'init', array($this, 'custom_post_type_projectos') );
        }

        function custom_post_type_projectos() {
            // Set UI labels for Custom Post Type
                $labels = array(
                    'name'                => _x( 'Projectos', 'Post Type General Name', 'default-theme' ),
                    'singular_name'       => _x( 'Projecto', 'Post Type Singular Name', 'default-theme' ),
                    'menu_name'           => __( 'Projectos', 'default-theme' ),
                    'parent_item_colon'   => __( 'Parent Projecto', 'default-theme' ),
                    'all_items'           => __( 'All Projectos', 'default-theme' ),
                    'view_item'           => __( 'View Projecto', 'default-theme' ),
                    'add_new_item'        => __( 'Add New Projecto', 'default-theme' ),
                    'add_new'             => __( 'Add New', 'default-theme' ),
                    'edit_item'           => __( 'Edit Projecto', 'default-theme' ),
                    'update_item'         => __( 'Update Projecto', 'default-theme' ),
                    'search_items'        => __( 'Search Projecto', 'default-theme' ),
                    'not_found'           => __( 'Not Found', 'default-theme' ),
                    'not_found_in_trash'  => __( 'Not found in Trash', 'default-theme' ),
                );
                
            // Set other options for Custom Post Type
                
                $args = array(
                    'label'               => __( 'Projectos', 'default-theme' ),
                    'description'         => __( 'Projecto news and reviews', 'default-theme' ),
                    'labels'              => $labels,
                    // Features this CPT supports in Post Editor
                    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
                    // You can associate this CPT with a taxonomy or custom taxonomy.
                    'taxonomies'          => array( 'genres', 'category' ),
                    /* A hierarchical CPT is like Pages and can have
                    * Parent and child items. A non-hierarchical CPT
                    * is like Posts.
                    */
                    'hierarchical'        => false,
                    'public'              => true,
                    'show_ui'             => true,
                    'show_in_menu'        => true,
                    'show_in_nav_menus'   => true,
                    'show_in_admin_bar'   => true,
                    'menu_position'       => 5,
                    'menu_icon'           => 'dashicons-portfolio',
                    'can_export'          => true,
                    'has_archive'         => true, // Para agregar un archivo archive.html
                    // 'rewrite' => array('slug' => 'projekte'),
                    'exclude_from_search' => false,
                    'publicly_queryable'  => true,
                    'capability_type'     => 'post',
                    'show_in_rest' => true,
                    'template' => array(
                    array( 'core/pattern', array(
                        'slug' => 'theme-slug/el-patron',
                    ) ),
                    )
                );
                
                // Registering your Custom Post Type
                register_post_type( 'Projectos', $args );
            
            }
    }
}




