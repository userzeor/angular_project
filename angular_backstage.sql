/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : angular_backstage

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-03-27 15:17:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(20) COLLATE utf8_bin NOT NULL,
  `pwd` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15111145430', '2015007');
INSERT INTO `user` VALUES ('2', '15111145431', '123456');
INSERT INTO `user` VALUES ('3', '15111145432', '1223456');
INSERT INTO `user` VALUES ('4', '15111145433', '1223456');
INSERT INTO `user` VALUES ('5', '15111145434', '1223456');
INSERT INTO `user` VALUES ('6', '13061951902', '2015007');
INSERT INTO `user` VALUES ('7', '13665488993', '123456');
INSERT INTO `user` VALUES ('8', '13245686886', '2015007');
INSERT INTO `user` VALUES ('9', '1963534590%40qq.com', '2015007');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) COLLATE utf8_bin NOT NULL,
  `userAge` int(11) NOT NULL,
  `userGender` varchar(10) COLLATE utf8_bin NOT NULL,
  `userAvatar` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `userAutograph` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `userBalance` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `userMember` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
