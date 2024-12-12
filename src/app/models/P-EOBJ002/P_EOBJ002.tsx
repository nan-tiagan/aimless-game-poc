import EOBJ001 from "../EOBJ001/EOBJ001";
import P_EOBJ002_Types from "../EOBJ001/EOBJ001_Types";

/**
 * Model for Players
 *
 * @export
 * @class P_EOBJ002
 * @extends {EOBJ001}
 */
export default class P_EOBJ002 extends EOBJ001 {
  /**
   * Creates an instance of P_EOBJ002.
   * @param {string} id
   * @param {number} health
   * @param {string} inventory
   * @param {P_EOBJ002_Types["pos"]} position
   * @memberof P_EOBJ002
   */
  constructor(
    id: string,
    health: number,
    inventory: string,
    position: P_EOBJ002_Types["pos"]
  ) {
    super(id);
    this.health = health;
    this.inventory = inventory;
    this.position = position;
    this.name = "Player";
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  action(params: any): void {
    console.warn("Method [action] not implemented.");
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  dialogue(params: any): void {
    console.log("[Player Dialogue] Hi I'm", this);
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  gather(params: any): void {
    console.warn("Method [gather] not implemented.");
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  upgrade(params: any): void {
    console.warn("Method [upgrade] not implemented.");
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  talk(params: any): void {
    console.warn("Method [talk] not implemented.");
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}  {void}
   * @memberof P_EOBJ002
   */
  checkBOBJ(params: any): void {
    console.warn("Method [checkBOBJ] not implemented.");
  }
}
