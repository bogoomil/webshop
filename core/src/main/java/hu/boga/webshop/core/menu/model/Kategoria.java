/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.menu.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import lombok.Data;


/**
 * @author user
 */
@Data
public class Kategoria {

  private List<Kategoria> children = new ArrayList<>();

  private String name;

  private Kategoria parent;

  private List<Tetel> tetelek;
}
