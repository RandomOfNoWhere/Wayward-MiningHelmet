import Mod from "@wayward/game/mod/Mod";
import { ItemType } from "@wayward/game/game/item/IItem";
export default class MiningHelmets extends Mod {
    static readonly INSTANCE: MiningHelmets;
    itemLavaBeetleMiningHelmet: ItemType;
    itemLitLavaBeetleMiningHelmet: ItemType;
    itemCopperMiningHelmet: ItemType;
    itemLitCopperMiningHelmet: ItemType;
    itemTinMiningHelmet: ItemType;
    itemLitTinMiningHelmet: ItemType;
    itemWroughtIronMiningHelmet: ItemType;
    itemLitWroughtIronMiningHelmet: ItemType;
    itemIronMiningHelmet: ItemType;
    itemLitIronMiningHelmet: ItemType;
    itemBronzeMiningHelmet: ItemType;
    itemLitBronzeMiningHelmet: ItemType;
}
