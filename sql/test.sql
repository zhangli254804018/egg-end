/*
Navicat MySQL Data Transfer

Source Server         : 本地数据sql
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-01-06 09:42:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lottery`
-- ----------------------------
DROP TABLE IF EXISTS `lottery`;
CREATE TABLE `lottery` (
  `name` varchar(120) CHARACTER SET utf8 DEFAULT NULL,
  `number` varchar(120) NOT NULL,
  `uid` int(120) DEFAULT NULL,
  `id` int(120) NOT NULL AUTO_INCREMENT,
  `creat_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of lottery
-- ----------------------------
INSERT INTO `lottery` VALUES ('23', '23,23,3,23,4,4', null, '31', '2019-12-31 11:05:30', '2019-12-31 11:05:30');
INSERT INTO `lottery` VALUES ('2453', '23,23,3,23,4,4', null, '32', '2019-12-31 11:08:52', '2019-12-31 11:08:52');
INSERT INTO `lottery` VALUES ('大乐透', '23,23,3,23,4,4', null, '33', '2019-12-31 11:09:22', '2019-12-31 11:09:22');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(120) CHARACTER SET utf8 NOT NULL,
  `password` varchar(60) NOT NULL,
  `uid` int(120) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('123456', '123456', '1');
INSERT INTO `user` VALUES ('1234567678', '67567', '2');
INSERT INTO `user` VALUES ('12345678', '', '3');
INSERT INTO `user` VALUES ('12345678565', '12345678', '4');
INSERT INTO `user` VALUES ('18998371950', '121212', '5');
INSERT INTO `user` VALUES ('2323', '2323', '6');
INSERT INTO `user` VALUES ('232323', '2323323', '7');
INSERT INTO `user` VALUES ('string', 'string', '8');
INSERT INTO `user` VALUES ('ter334535', '2323323', '9');
INSERT INTO `user` VALUES ('ter3434', '2323323', '10');
INSERT INTO `user` VALUES ('ter343489789', '2323323', '11');
INSERT INTO `user` VALUES ('terst12', '2323323', '12');
INSERT INTO `user` VALUES ('terst1254646', '2323323', '13');
INSERT INTO `user` VALUES ('陈磊注册23', '2323323', '14');
INSERT INTO `user` VALUES ('12', '12', '15');
