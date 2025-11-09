// Simple mock data for categories, subcategories, and products
export const storeData = [
  {
    id: 'graphics',
    name: 'Pixel Graphics',
    blurb: 'Sprites, tilesets, UI packs with retro flair',
    subcategories: [
      {
        id: 'sprites',
        name: 'Sprite Packs',
        products: [
          { id: 'sprite-8bit-hero', name: '8-bit Hero Pack', price: 12 },
          { id: 'sprite-rogue-lites', name: 'Roguelite Enemies', price: 9 },
          { id: 'sprite-npc-town', name: 'Town NPC Set', price: 7 }
        ]
      },
      {
        id: 'tiles',
        name: 'Tilesets',
        products: [
          { id: 'tile-dungeon', name: 'Dungeon Tileset', price: 14 },
          { id: 'tile-forest', name: 'Forest Tileset', price: 10 }
        ]
      }
    ]
  },
  {
    id: 'audio',
    name: 'Chiptune Audio',
    blurb: 'Loops, SFX, stingers and backgrounds',
    subcategories: [
      {
        id: 'loops',
        name: 'Music Loops',
        products: [
          { id: 'loop-adventure', name: 'Adventure Theme', price: 11 },
          { id: 'loop-boss', name: 'Boss Battle', price: 13 }
        ]
      },
      {
        id: 'sfx',
        name: 'Sound FX',
        products: [
          { id: 'sfx-ui', name: 'UI Beeps', price: 5 },
          { id: 'sfx-explosions', name: 'Explosions Pack', price: 8 }
        ]
      }
    ]
  },
  {
    id: 'templates',
    name: 'Game Templates',
    blurb: 'Starter kits and code templates',
    subcategories: [
      {
        id: 'platformer',
        name: 'Platformer',
        products: [
          { id: 'tmpl-platformer-basic', name: 'Platformer Basic', price: 19 },
          { id: 'tmpl-platformer-advanced', name: 'Platformer Advanced', price: 29 }
        ]
      },
      {
        id: 'shooter',
        name: 'Top-Down Shooter',
        products: [
          { id: 'tmpl-shooter-rogue', name: 'Rogue Shooter', price: 24 }
        ]
      }
    ]
  }
];

export function getCategory(catId) {
  return storeData.find((c) => c.id === catId);
}

export function getSubcategory(catId, subId) {
  const cat = getCategory(catId);
  if (!cat) return undefined;
  return cat.subcategories.find((s) => s.id === subId);
}
