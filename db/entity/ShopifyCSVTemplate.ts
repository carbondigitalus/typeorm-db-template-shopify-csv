// Shopify CSV Template Ref:
// https://help.shopify.com/en/manual/products/import-export/import-products

// Required Field Ref:
// https://firebearstudio.com/blog/the-ultimate-guide-to-shopify-import.html

// NPM Modules
import {
    IsBoolean,
    IsEmpty,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Matches,
    MinLength,
    MaxLength,
    Min,
    NotContains
} from 'class-validator';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import 'reflect-metadata';

