import Mod from "@wayward/game/mod/Mod";
import Register, { Registry } from "@wayward/game/mod/ModRegistry";
import { EquipEffect, ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { RecipeComponent} from "@wayward/game/game/item/ItemDescriptions";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { DoodadTypeGroup } from "@wayward/game/game/doodad/IDoodad";
import { DamageType, Defense } from "@wayward/game/game/entity/IEntity";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
import Deity from "@wayward/game/game/deity/Deity";

//import Mod from "mod/Mod";
//import Register, { Registry } from "mod/ModRegistry";
//import { RecipeComponent } from "game/item/ItemDescriptions";
//import {  EquipEffect, ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
//import { EquipType, SkillType } from "game/entity/IHuman";
//import { TempType } from "game/temperature/ITemperature";
//import { ActionType } from "game/entity/action/IAction";
//import { BiomeType } from "game/biome/BiomeType";

const itemGroups1 = [
	ItemTypeGroup.Equipment,
	ItemTypeGroup.LightDevice
  ];
  const itemGroups2 = [
	ItemTypeGroup.Equipment,
	ItemTypeGroup.Untradable,
	ItemTypeGroup.FireSource,
	ItemTypeGroup.FireStarter,
	ItemTypeGroup.LitCandle
  ];
const requiredToDissassembly = [
	ItemTypeGroup.Hammer,
	ItemTypeGroup.SandCastFlask
  ];
  const useTypes = [
	ActionType.Ignite
  ];
  const useTypes2 =[
	ActionType.Extinguish
  ]
  const usedDoodads=[
    DoodadTypeGroup.Anvil
  ];	
export default class MiningHelmets extends Mod {

	@Mod.instance<MiningHelmets>("MiningHelmets")
    public static readonly INSTANCE: MiningHelmets;

	@Register.item("LavaBeetleMiningHelmet", {
		groups: itemGroups1,
		durability: 50,
		defense:new Defense(3).setResistance(DamageType.Slashing,1).setResistance(DamageType.Blunt,3).setResistance(DamageType.Fire,4).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitLavaBeetleMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.LavaBeetleHelmet, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Tinkering,
		  	level: RecipeLevel.Simple,
			//reputation: -50 //No longer used
			runeChance: [Deity.Good, 0.01]
		},
		craftable: true,
		repairable: !1,
		spawnOnMerchant:[BiomeType.Volcanic],

		flammable: false,
		worth: 750,
		equippedInsulation:{[TempType.Heat]:.3,[TempType.Cold]:.5}
	})
	public itemLavaBeetleMiningHelmet: ItemType;

    @Register.item("LitLavaBeetleMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemLavaBeetleMiningHelmet"),
		groups: itemGroups2,
		durability: 75,
		defense:new Defense(3).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:3000,
		revert:Registry<MiningHelmets>().get("itemLavaBeetleMiningHelmet"),
		repairable: !1,
		flammable: !1,
		worth: 700,
		equippedInsulation:{[TempType.Cold]:.2},
		equipEffect:[EquipEffect.LightSource,2]
	})
	public itemLitLavaBeetleMiningHelmet: ItemType;

	@Register.item("CopperMiningHelmet", {
		groups: itemGroups1,
		durability: 75,
		defense:new Defense(3).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitCopperMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.SmeltedCopper, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Blacksmithing,
		  	level: RecipeLevel.Expert,
		  	requiredDoodads:usedDoodads,
		  	requiresFire: true,
			//reputation: -775 //No longer used
			runeChance: [Deity.Good, 0.01]
		},
		storeDisassemblyItems: true,
		requiredForDisassembly: requiredToDissassembly,
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 700,
		equippedInsulation:{[TempType.Cold]:.2}
	})
	public itemCopperMiningHelmet: ItemType;

    @Register.item("LitCopperMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemCopperMiningHelmet"),
		groups: itemGroups2,
		durability: 75,
		defense:new Defense(3).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:2500,
		revert:Registry<MiningHelmets>().get("itemCopperMiningHelmet"),
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 700,
		equippedInsulation:{[TempType.Cold]:.2},
		equipEffect:[EquipEffect.LightSource,2]
	})
	public itemLitCopperMiningHelmet: ItemType;

	@Register.item("TinMiningHelmet", {
		groups: itemGroups1,
		durability: 30,
		defense:new Defense(2).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitTinMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.SmeltedTin, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Blacksmithing,
		  	level: RecipeLevel.Advanced,
		  	requiredDoodads:usedDoodads,
		  	requiresFire: true,
			//reputation: -750 //No longer used
			runeChance: [Deity.Good, 0.01]
		},
		storeDisassemblyItems: true,
		requiredForDisassembly: requiredToDissassembly,
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 700,
		equippedInsulation:{[TempType.Heat]:.1,[TempType.Cold]:.3}
	})
	public itemTinMiningHelmet: ItemType;

    @Register.item("LitTinMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemTinMiningHelmet"),
		groups: itemGroups2,
		durability: 75,
		defense:new Defense(2).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:2000,
		revert:Registry<MiningHelmets>().get("itemTinMiningHelmet"),
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 700,
		equippedInsulation:{[TempType.Heat]:.1,[TempType.Cold]:.3},
		equipEffect:[EquipEffect.LightSource,2]
	})
	public itemLitTinMiningHelmet: ItemType;

	@Register.item("WroughtIronMiningHelmet", {
		groups: itemGroups1,
		durability: 70,
		defense:new Defense(3).setResistance(DamageType.Slashing,1).setResistance(DamageType.Piercing,1).setVulnerability(DamageType.Blunt,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitWroughtIronMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.SmeltedWroughtIron, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Blacksmithing,
		  	level: RecipeLevel.Expert,
		  	requiredDoodads:usedDoodads,
		  	requiresFire: true,
			//reputation: -850 ////No longer used
			runeChance: [Deity.Good, 0.01]
		},
		storeDisassemblyItems: true,
		requiredForDisassembly: requiredToDissassembly,
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 800,
		equippedInsulation:{[TempType.Heat]:.1,[TempType.Cold]:.3}
	})
	public itemWroughtIronMiningHelmet: ItemType;

    @Register.item("LitWroughtIronMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemWroughtIronMiningHelmet"),
		groups: itemGroups2,
		durability: 75,
		defense:new Defense(3).setResistance(DamageType.Slashing,1).setResistance(DamageType.Piercing,1).setVulnerability(DamageType.Blunt,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:3000,
		revert:Registry<MiningHelmets>().get("itemWroughtIronMiningHelmet"),
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 800,
		equippedInsulation:{[TempType.Cold]:.2},
		equipEffect:[EquipEffect.LightSource,2]
	})
	public itemLitWroughtIronMiningHelmet: ItemType;

	@Register.item("IronMiningHelmet", {
		groups: itemGroups1,
		durability: 175,
		defense:new Defense(4).setResistance(DamageType.Slashing,1).setResistance(DamageType.Piercing,1).setResistance(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitIronMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.SmeltedIron, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Blacksmithing,
		  	level: RecipeLevel.Master,
		  	requiredDoodads:usedDoodads,
		  	requiresFire: true,
			//reputation: -1500 //No longer used
			runeChance: [Deity.Good, 0.01]
		},
		storeDisassemblyItems: true,
		requiredForDisassembly: requiredToDissassembly,
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		spawnOnMerchant:[BiomeType.IceCap,BiomeType.Arid,BiomeType.Volcanic],
		flammable: false,
		worth: 1000,
		equippedInsulation:{[TempType.Heat]:.1,[TempType.Cold]:.3}		
	})
	public itemIronMiningHelmet: ItemType;

    @Register.item("LitIronMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemIronMiningHelmet"),
		groups: itemGroups2,
		durability: 175,
		defense:new Defense(4).setVulnerability(DamageType.Fire,1).setVulnerability(DamageType.Cold,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:3500,
		revert:Registry<MiningHelmets>().get("itemIronMiningHelmet"),
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 1000,
		equippedInsulation:{[TempType.Heat]:.1,[TempType.Cold]:.3},
		equipEffect:[EquipEffect.LightSource,3]
	})
	public itemLitIronMiningHelmet: ItemType;

	@Register.item("BronzeMiningHelmet", {
		groups: itemGroups1,
		durability: 125,
		defense:new Defense(7).setVulnerability(DamageType.Cold,2).setVulnerability(DamageType.Blunt,1),
		equip: EquipType.Head,
		use: useTypes,
		lit:Registry<MiningHelmets>().get("itemLitBronzeMiningHelmet"),
		recipe: {
			components: [	
			RecipeComponent(ItemType.SmeltedBronze, 8, 8, 8),
			RecipeComponent(ItemType.TallowCandle, 1, 1, 1)
			],	    
			skill: SkillType.Blacksmithing,
		  	level: RecipeLevel.Master,
		  	requiredDoodads:usedDoodads,
		  	requiresFire: true,
			//reputation: -750 //No longer used
			runeChance: [Deity.Good, 0.01]
		},
		storeDisassemblyItems: true,
		requiredForDisassembly: requiredToDissassembly,
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		spawnOnMerchant:[BiomeType.Volcanic],
		worth: 1300,
		equippedInsulation:{[TempType.Cold]:.2}
	})
	public itemBronzeMiningHelmet: ItemType;

    @Register.item("LitBronzeMiningHelmet", {
		inheritWeight:Registry<MiningHelmets>().get("itemBronzeMiningHelmet"),
		groups: itemGroups2,
		durability: 125,
		defense:new Defense(7).setVulnerability(DamageType.Cold,2).setVulnerability(DamageType.Blunt,1),
		equip: EquipType.Head,
		use: useTypes2,
		decayMax:4000,
		revert:Registry<MiningHelmets>().get("itemBronzeMiningHelmet"),
		craftable: true,
		repairable: true,
		repairAndDisassemblyRequiresFire: true,
		flammable: false,
		worth: 1300,
		equippedInsulation:{[TempType.Cold]:.2},
		equipEffect:[EquipEffect.LightSource,3]
	})
	public itemLitBronzeMiningHelmet: ItemType;

}
