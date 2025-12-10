var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/mod/Mod", "@wayward/game/mod/ModRegistry", "@wayward/game/game/item/IItem", "@wayward/game/game/item/ItemDescriptions", "@wayward/game/game/entity/skill/ISkills", "@wayward/game/game/entity/action/IAction", "@wayward/game/game/biome/IBiome", "@wayward/game/game/doodad/IDoodad", "@wayward/game/game/entity/IEntity", "@wayward/game/game/entity/IHuman", "@wayward/game/game/temperature/ITemperature", "@wayward/game/game/deity/Deity"], function (require, exports, Mod_1, ModRegistry_1, IItem_1, ItemDescriptions_1, ISkills_1, IAction_1, IBiome_1, IDoodad_1, IEntity_1, IHuman_1, ITemperature_1, Deity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const itemGroups1 = [
        IItem_1.ItemTypeGroup.Equipment,
        IItem_1.ItemTypeGroup.LightDevice
    ];
    const itemGroups2 = [
        IItem_1.ItemTypeGroup.Equipment,
        IItem_1.ItemTypeGroup.Untradable,
        IItem_1.ItemTypeGroup.FireSource,
        IItem_1.ItemTypeGroup.FireStarter,
        IItem_1.ItemTypeGroup.LitCandle
    ];
    const requiredToDissassembly = [
        IItem_1.ItemTypeGroup.Hammer,
        IItem_1.ItemTypeGroup.SandCastFlask
    ];
    const useTypes = [
        IAction_1.ActionType.Ignite
    ];
    const useTypes2 = [
        IAction_1.ActionType.Extinguish
    ];
    const usedDoodads = [
        IDoodad_1.DoodadTypeGroup.Anvil
    ];
    class MiningHelmets extends Mod_1.default {
    }
    exports.default = MiningHelmets;
    __decorate([
        ModRegistry_1.default.item("LavaBeetleMiningHelmet", {
            groups: itemGroups1,
            durability: 50,
            defense: new IEntity_1.Defense(3).setResistance(IEntity_1.DamageType.Slashing, 1).setResistance(IEntity_1.DamageType.Blunt, 3).setResistance(IEntity_1.DamageType.Fire, 4).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitLavaBeetleMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.LavaBeetleHelmet, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Tinkering,
                level: IItem_1.RecipeLevel.Simple,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            craftable: true,
            repairable: !1,
            spawnOnMerchant: [IBiome_1.BiomeType.Volcanic],
            flammable: false,
            worth: 750,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .3, [ITemperature_1.TempType.Cold]: .5 }
        })
    ], MiningHelmets.prototype, "itemLavaBeetleMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitLavaBeetleMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemLavaBeetleMiningHelmet"),
            groups: itemGroups2,
            durability: 75,
            defense: new IEntity_1.Defense(3).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 3000,
            revert: (0, ModRegistry_1.Registry)().get("itemLavaBeetleMiningHelmet"),
            repairable: !1,
            flammable: !1,
            worth: 700,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 2]
        })
    ], MiningHelmets.prototype, "itemLitLavaBeetleMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("CopperMiningHelmet", {
            groups: itemGroups1,
            durability: 75,
            defense: new IEntity_1.Defense(3).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitCopperMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.SmeltedCopper, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Expert,
                requiredDoodads: usedDoodads,
                requiresFire: true,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            storeDisassemblyItems: true,
            requiredForDisassembly: requiredToDissassembly,
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 700,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 }
        })
    ], MiningHelmets.prototype, "itemCopperMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitCopperMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemCopperMiningHelmet"),
            groups: itemGroups2,
            durability: 75,
            defense: new IEntity_1.Defense(3).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 2500,
            revert: (0, ModRegistry_1.Registry)().get("itemCopperMiningHelmet"),
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 700,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 2]
        })
    ], MiningHelmets.prototype, "itemLitCopperMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("TinMiningHelmet", {
            groups: itemGroups1,
            durability: 30,
            defense: new IEntity_1.Defense(2).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitTinMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.SmeltedTin, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Advanced,
                requiredDoodads: usedDoodads,
                requiresFire: true,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            storeDisassemblyItems: true,
            requiredForDisassembly: requiredToDissassembly,
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 700,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .1, [ITemperature_1.TempType.Cold]: .3 }
        })
    ], MiningHelmets.prototype, "itemTinMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitTinMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemTinMiningHelmet"),
            groups: itemGroups2,
            durability: 75,
            defense: new IEntity_1.Defense(2).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 2000,
            revert: (0, ModRegistry_1.Registry)().get("itemTinMiningHelmet"),
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 700,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .1, [ITemperature_1.TempType.Cold]: .3 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 2]
        })
    ], MiningHelmets.prototype, "itemLitTinMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("WroughtIronMiningHelmet", {
            groups: itemGroups1,
            durability: 70,
            defense: new IEntity_1.Defense(3).setResistance(IEntity_1.DamageType.Slashing, 1).setResistance(IEntity_1.DamageType.Piercing, 1).setVulnerability(IEntity_1.DamageType.Blunt, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitWroughtIronMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.SmeltedWroughtIron, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Expert,
                requiredDoodads: usedDoodads,
                requiresFire: true,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            storeDisassemblyItems: true,
            requiredForDisassembly: requiredToDissassembly,
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 800,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .1, [ITemperature_1.TempType.Cold]: .3 }
        })
    ], MiningHelmets.prototype, "itemWroughtIronMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitWroughtIronMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemWroughtIronMiningHelmet"),
            groups: itemGroups2,
            durability: 75,
            defense: new IEntity_1.Defense(3).setResistance(IEntity_1.DamageType.Slashing, 1).setResistance(IEntity_1.DamageType.Piercing, 1).setVulnerability(IEntity_1.DamageType.Blunt, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 3000,
            revert: (0, ModRegistry_1.Registry)().get("itemWroughtIronMiningHelmet"),
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 800,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 2]
        })
    ], MiningHelmets.prototype, "itemLitWroughtIronMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("IronMiningHelmet", {
            groups: itemGroups1,
            durability: 175,
            defense: new IEntity_1.Defense(4).setResistance(IEntity_1.DamageType.Slashing, 1).setResistance(IEntity_1.DamageType.Piercing, 1).setResistance(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitIronMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.SmeltedIron, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Master,
                requiredDoodads: usedDoodads,
                requiresFire: true,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            storeDisassemblyItems: true,
            requiredForDisassembly: requiredToDissassembly,
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            spawnOnMerchant: [IBiome_1.BiomeType.IceCap, IBiome_1.BiomeType.Arid, IBiome_1.BiomeType.Volcanic],
            flammable: false,
            worth: 1000,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .1, [ITemperature_1.TempType.Cold]: .3 }
        })
    ], MiningHelmets.prototype, "itemIronMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitIronMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemIronMiningHelmet"),
            groups: itemGroups2,
            durability: 175,
            defense: new IEntity_1.Defense(4).setVulnerability(IEntity_1.DamageType.Fire, 1).setVulnerability(IEntity_1.DamageType.Cold, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 3500,
            revert: (0, ModRegistry_1.Registry)().get("itemIronMiningHelmet"),
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 1000,
            equippedInsulation: { [ITemperature_1.TempType.Heat]: .1, [ITemperature_1.TempType.Cold]: .3 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 3]
        })
    ], MiningHelmets.prototype, "itemLitIronMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("BronzeMiningHelmet", {
            groups: itemGroups1,
            durability: 125,
            defense: new IEntity_1.Defense(7).setVulnerability(IEntity_1.DamageType.Cold, 2).setVulnerability(IEntity_1.DamageType.Blunt, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes,
            lit: (0, ModRegistry_1.Registry)().get("itemLitBronzeMiningHelmet"),
            recipe: {
                components: [
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.SmeltedBronze, 8, 8, 8),
                    (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.TallowCandle, 1, 1, 1)
                ],
                skill: ISkills_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Master,
                requiredDoodads: usedDoodads,
                requiresFire: true,
                runeChance: [Deity_1.default.Good, 0.01]
            },
            storeDisassemblyItems: true,
            requiredForDisassembly: requiredToDissassembly,
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            spawnOnMerchant: [IBiome_1.BiomeType.Volcanic],
            worth: 1300,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 }
        })
    ], MiningHelmets.prototype, "itemBronzeMiningHelmet", void 0);
    __decorate([
        ModRegistry_1.default.item("LitBronzeMiningHelmet", {
            inheritWeight: (0, ModRegistry_1.Registry)().get("itemBronzeMiningHelmet"),
            groups: itemGroups2,
            durability: 125,
            defense: new IEntity_1.Defense(7).setVulnerability(IEntity_1.DamageType.Cold, 2).setVulnerability(IEntity_1.DamageType.Blunt, 1),
            equip: IHuman_1.EquipType.Head,
            use: useTypes2,
            decayMax: 4000,
            revert: (0, ModRegistry_1.Registry)().get("itemBronzeMiningHelmet"),
            craftable: true,
            repairable: true,
            repairAndDisassemblyRequiresFire: true,
            flammable: false,
            worth: 1300,
            equippedInsulation: { [ITemperature_1.TempType.Cold]: .2 },
            equipEffect: [IItem_1.EquipEffect.LightSource, 3]
        })
    ], MiningHelmets.prototype, "itemLitBronzeMiningHelmet", void 0);
    __decorate([
        Mod_1.default.instance("MiningHelmets")
    ], MiningHelmets, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWluaW5nSGVsbWV0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9NaW5pbmdIZWxtZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQXNCQSxNQUFNLFdBQVcsR0FBRztRQUNuQixxQkFBYSxDQUFDLFNBQVM7UUFDdkIscUJBQWEsQ0FBQyxXQUFXO0tBQ3ZCLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRztRQUNyQixxQkFBYSxDQUFDLFNBQVM7UUFDdkIscUJBQWEsQ0FBQyxVQUFVO1FBQ3hCLHFCQUFhLENBQUMsVUFBVTtRQUN4QixxQkFBYSxDQUFDLFdBQVc7UUFDekIscUJBQWEsQ0FBQyxTQUFTO0tBQ3JCLENBQUM7SUFDSixNQUFNLHNCQUFzQixHQUFHO1FBQzlCLHFCQUFhLENBQUMsTUFBTTtRQUNwQixxQkFBYSxDQUFDLGFBQWE7S0FDekIsQ0FBQztJQUNGLE1BQU0sUUFBUSxHQUFHO1FBQ2xCLG9CQUFVLENBQUMsTUFBTTtLQUNmLENBQUM7SUFDRixNQUFNLFNBQVMsR0FBRTtRQUNsQixvQkFBVSxDQUFDLFVBQVU7S0FDbkIsQ0FBQTtJQUNELE1BQU0sV0FBVyxHQUFDO1FBQ2hCLHlCQUFlLENBQUMsS0FBSztLQUN0QixDQUFDO0lBQ0osTUFBcUIsYUFBYyxTQUFRLGFBQUc7S0F3UzdDO0lBeFNELGdDQXdTQztJQTFRTztRQXpCTixxQkFBUSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUN4QyxNQUFNLEVBQUUsV0FBVztZQUNuQixVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBQyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFVLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsb0JBQVUsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdC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