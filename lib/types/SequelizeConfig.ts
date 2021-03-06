import {ISequelizeConfig} from "../interfaces/ISequelizeConfig";
import {ISequelizeUriConfig} from "../interfaces/ISequelizeUriConfig";
import {ISequelizeDbNameConfig} from "../interfaces/ISequelizeDbNameConfig";

export type SequelizeConfig = ISequelizeConfig | ISequelizeUriConfig | ISequelizeDbNameConfig;

export type ModelMatch = (filename: string, member: string) => boolean;
